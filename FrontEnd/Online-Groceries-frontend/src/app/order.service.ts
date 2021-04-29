import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  updateOrderStatus(updateOrder: any) {
    //if (orderStatus==cancelled) {
    // Ping DB with post request to update status and add the cancellation message 
    //}
    
    //Ping DB with a post request to update the status of the order
  }

}
