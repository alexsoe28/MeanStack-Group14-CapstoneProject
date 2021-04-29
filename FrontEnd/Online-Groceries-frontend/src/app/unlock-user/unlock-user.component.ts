import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-unlock-user',
  templateUrl: './unlock-user.component.html',
  styleUrls: ['./unlock-user.component.css']
})
export class UnlockUserComponent implements OnInit {
  updateMsg?:string

  constructor(public ticketService:TicketService, public userService:UserService) { }

  ngOnInit(): void {
  }
  getLockedUsers() {
    // this.ticketService.getLockedUser().subscribe((result:string) => {
    // });
    // Populate table with this information
  }

  unlockUser(userId: number) {
    //this.userService.unlockUser(userId).subscribe((result:string) => console.log(result), (error:any) => console.log(error));
  }

}
