import { Component, OnInit } from '@angular/core';
import { Ticket, TicketsService } from '../services/tickets/tickets.service';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {
  updateMsg?:string;
  constructor(public ticketService:TicketsService) { }

  ngOnInit(): void {
  }
  sendRequest(restockRequest: any) {
    let ticket:Ticket = {
      _id: restockRequest.pId,
      userId: restockRequest.userId,
      ticketType: "adminRequest",
      message: restockRequest.msg
    };
     this.ticketService.raiseAdminRequest(ticket);
     this.updateMsg = "Ticket has been sent!";
  }
}
