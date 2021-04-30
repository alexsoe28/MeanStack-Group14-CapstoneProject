import { Component, OnInit } from '@angular/core';
import { Ticket, TicketsService } from 'src/app/services/tickets/tickets.service';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

	tickets: Ticket[] = [];
	ticketColumn = ["ticketId", "userId", "message"];

	constructor(private ticketsService: TicketsService) { }

	ngOnInit(): void {
		this.ticketsService.getAdminRequests()
			.subscribe(data => this.tickets = data);
	}

}
