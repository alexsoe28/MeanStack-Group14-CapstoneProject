import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  ipAddress:string="";

  constructor(public http:HttpClient) { }

  updateOrderStatus(updateOrder: any) {
    return this.http.post(this.ipAddress+"/updateStatus", updateOrder, {responseType:"text"}).
    subscribe(result=>console.log(result),error=>console.log(error));
  }

}
