import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  host = "http://localhost:9090";
	endpoint = "/user";

  constructor(private http: HttpClient) { }

  addUser(product: { fname: String, lname: String, dob: Date, username: String, password:String, role:String, status:String }) {
		const url = this.host + this.endpoint + "/signup";
		this.http.post(url, product)
			.subscribe(result => console.log(result), error => console.error(error));
	}
}
