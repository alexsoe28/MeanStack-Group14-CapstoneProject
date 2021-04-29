import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export type UserRole = "admin" | "customer" | "employee";

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	host = "http://localhost:9090";
	endpoint = "/users";

	constructor(private http: HttpClient) { }

  addUser(product: { fname: String, lname: String, dob: Date, username: String, password:String, role:String, status:String }) {
		const url = this.host + this.endpoint + "/signup";
		this.http.post(url, product)
			.subscribe(result => console.log(result), error => console.error(error));
	}

	signIn(credentials: { username: String, password: String, role: UserRole }) {
		const url = this.host + this.endpoint + "/login";
		const payload = {
			username: credentials.username,
			password: credentials.password,
			accessingRole: credentials.role,
		}
		return this.http.post<{ userId: String }>(url, payload)
			.pipe(
				tap(data => console.table(data)),
				catchError(error => {
					if (error instanceof HttpErrorResponse) {
						if (error.status === 401 || error.status === 403) {
							return of({ userId: undefined });
						}
					}
					return throwError(error)
				})
			);
	}
}