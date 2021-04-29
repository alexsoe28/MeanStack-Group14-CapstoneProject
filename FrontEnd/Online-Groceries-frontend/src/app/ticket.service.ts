import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor() { }

  sendTicket(restockRequest:any) {
    //Ping end point and post the ticket to DB
  }

  loadTickets() {
    //Ping end point and get all locked users from DB
  }

}
