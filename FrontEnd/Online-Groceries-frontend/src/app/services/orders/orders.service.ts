import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export interface Order {
	_id: String,
	timestamp: String,
	userId: String,
	cart: { quantity: Number, _id: String }[]
	status: String,
}
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

	getAll(date?: Date) {
		const url = this.host + this.endpoint + "/getAll";
		const request = (() => {
			if (date) {
				return this.http.get<Order[]>(url, { params: { date: date.toISOString() } });
			} else {
				return this.http.get<Order[]>(url);
			}
		})()

		return request.pipe(
			tap(data => console.log(data)),
			catchError(error => throwError(error))
		)
	}
}
