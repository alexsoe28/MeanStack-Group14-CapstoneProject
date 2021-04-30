import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRole, UsersService } from 'src/app/services/users/users.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	resultMsg?: string;

	constructor(public router: Router, private usersService: UsersService) { }   //DI : Dependency Injection 

	ngOnInit(): void { }

	login(loginRef: any) {
		let username = loginRef.eid;
		let pass = loginRef.pass;

		const credentials = {
			username: username as String,
			password: pass as String,
			role: "employee" as UserRole,
		}
		console.table(credentials);

		this.usersService.signIn(credentials)
			.subscribe(({ userId }) => {
				if (userId === undefined) {
					console.log("wrong username / password");
					this.resultMsg = "Wrong Input, try again"
					// this._snackBar.open("Wrong Username or Password!", undefined, { duration: 3000 });
				} else {
					console.log(`logged in as userId: ${userId}`);
					localStorage.setItem("userid", userId.toString());
					this.router.navigate(["employee/panel"]);
				}
			})
	}

}
