import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-update-status',
  templateUrl: './update-status.component.html',
  styleUrls: ['./update-status.component.css']
})
export class UpdateStatusComponent implements OnInit {
  updateMsg?:string;

  constructor(public orderService:OrderService) { }

  ngOnInit(): void {
  }

  updateOrderStatus(updateOrder: any) {
    this.orderService.updateOrderStatus(updateOrder);
    this.updateMsg = "Status has been updated!";
  }

}
