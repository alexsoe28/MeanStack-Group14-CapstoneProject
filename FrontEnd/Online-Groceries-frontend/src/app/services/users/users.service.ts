import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export type UserRole = "admin" | "customer" | "employee";
export type UserStatus = "normal" | "locked";

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	host = "http://localhost:9090";
	endpoint = "/users";

	constructor(private http: HttpClient) { }

	addUser(user: { role: String, status: UserStatus, username: String, password: String, contact: { firstname: String, lastname: String, dob: Date } }) {
		const url = this.host + this.endpoint + "/register";
		return this.http.post(url, user)
			.subscribe(result => console.table(result), error => console.error(error));
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

	updateUserDetails(details: {
		userId: String, fName?: String, lName?: String, email?: String,
		username?: String, password?: String
	}) {
		const url = this.host + this.endpoint + "/updateUserDetails";
		return this.http.put(url, details)
			.pipe(
				catchError(error => throwError(error))
			)
	}
}