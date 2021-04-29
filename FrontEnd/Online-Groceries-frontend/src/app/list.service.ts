import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public http:HttpClient) { }

  sendShoppingCart(list:any){
    this.http.post("http://localhost:3000/ShoppingCart",list).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
}