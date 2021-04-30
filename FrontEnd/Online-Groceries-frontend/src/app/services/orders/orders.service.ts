import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

	host = "http://localhost:9090";
	endpoint = "/orders";

	constructor(private http: HttpClient) { } 

	checkout(cart: { userId: String, cart: { productId: String, quantity: Number }[] }) {
		const url = this.host + this.endpoint + "/checkout";
		this.http.post(url, cart)
			.subscribe(data => console.log(data), error => console.error(error));
	}
}
