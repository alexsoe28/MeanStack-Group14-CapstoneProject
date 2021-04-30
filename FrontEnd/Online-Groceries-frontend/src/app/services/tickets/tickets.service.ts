import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, tap, catchError } from "rxjs/operators";

export type TicketType = "ticket" | "adminRequest";

export interface TicketRequest {
	userId: String, message: String
}

export interface Ticket {
	_id: String,
	userId: String,
	ticketType: String,
	message: String,
}

@Injectable({
	providedIn: 'root'
})
export class TicketsService {

	host = "http://localhost:9090";
	endpoint = "/tickets";

	constructor(private http: HttpClient) { }

	private getTickets(ticketType: TicketType) {
		const url = (() => {
			switch (ticketType) {
				case 'adminRequest': return this.host + this.endpoint + "/getAllAdminTickets";
				case 'ticket': return this.host + this.endpoint + "/getAllUserTickets";
			}
		})();

		return this.http.get<Ticket[]>(url)
			.pipe(
				tap(data => console.log(data)),
				catchError(error => throwError(error))
			);
	}

	private raiseTicket(ticketType: TicketType, ticket: TicketRequest) {
		const url = (() => {
			switch (ticketType) {
				case 'adminRequest': return this.host + this.endpoint + "/raiseAdminRequest";
				case 'ticket': return this.host + this.endpoint + "/raiseUserTicket";
			}
		})();

		this.http.post(url, ticket)
			.pipe(
				tap(data => console.log(data)),
				catchError(error => throwError(error))
			)
			.subscribe();
	}

	getAdminRequests() {
		return this.getTickets("adminRequest");
	}

	getUserTickets() {
		return this.getTickets("ticket");
	}

	raiseAdminRequest(ticket: TicketRequest) {
		return this.raiseTicket("adminRequest", ticket);
	}

	raiseUserTicket(ticket: TicketRequest) {
		return this.raiseTicket("ticket", ticket);
	}
}
