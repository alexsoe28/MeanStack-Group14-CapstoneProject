import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-employee-request',
  templateUrl: './employee-request.component.html',
  styleUrls: ['./employee-request.component.css']
})
export class EmployeeRequestComponent implements OnInit {
  updateMsg?:string;
  constructor(public ticketService:TicketService) { }

  ngOnInit(): void {
  }
  sendRequest(restockRequest: any) {
    // this.ticketService.sendTicket(restockRequest).subscribe((result:string) => {
    //   this.updateMsg=result;
    // });
  }
}
