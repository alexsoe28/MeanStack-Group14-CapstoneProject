import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	host = "http://localhost:9090";
	endpoint = "/inventory";

  constructor(private http: HttpClient) { }

	addProduct({name, price, stockInventory}: {name: String, price: Number, stockInventory: Number}) {
		const url = this.host + this.endpoint + "/addOne";
		const payload = {name: name, price: price, stockInventory: stockInventory};
		this.http.post(url, payload)
			.subscribe(result => console.log(result), error => console.error(error));
	}
}
