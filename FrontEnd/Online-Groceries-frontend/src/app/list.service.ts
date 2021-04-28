import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(public http:HttpClient) { }

  storeListInJSON(list:any){
    this.http.post("../../assets/ShoppingList.json",list).
    subscribe(result=>console.log(result),error=>console.log(error));
  }
  loadListFromJSON() {
    return this.http.get<any[]>("../../assets/ShoppingList.json");
  }
}