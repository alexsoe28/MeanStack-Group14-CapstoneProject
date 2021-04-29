import { Component, OnInit } from '@angular/core';
import { Ticket, TicketsService } from '../services/tickets/tickets.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  updateMsg?:string = "";
  users: Array<Ticket> = [];

  constructor(public ticketService:TicketsService, public userService:UserService) { }

  ngOnInit(): void {
  }
  getLockedUsers() {
    this.ticketService.getUserTickets().subscribe(result => {
      this.users = result;
    });
  }

  unlockUser(unlockUserById:any) {
    let userId = unlockUserById.userId;
    this.userService.unlockUser(userId);
    this.updateMsg = "User has been unlocked!";
  }

}
