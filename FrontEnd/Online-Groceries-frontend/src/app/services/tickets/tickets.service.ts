import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, tap, catchError } from "rxjs/operators";

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

	getAdminRequests() {
		const url = this.host + this.endpoint + "/getAllAdminTickets";
		return this.http.get<Ticket[]>(url)
			.pipe(
				tap(data => console.log(data)),
				catchError(error => throwError(error))
			)
	}

	addProduct(product: { name: String, price: Number, stockInventory: Number }) {
		const url = this.host + this.endpoint + "/addOne";
		this.http.post(url, product)
			.subscribe(result => console.log(result), error => console.error(error));
	}

}
