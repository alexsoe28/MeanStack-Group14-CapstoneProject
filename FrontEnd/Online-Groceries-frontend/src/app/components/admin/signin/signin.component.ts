import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole, UsersService } from 'src/app/services/users/users.service';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {

	signInForm = this.fb.group({
		username: ['', [Validators.required]],
		password: ['', [Validators.required]],
	})

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private usersService: UsersService,
		private _snackBar: MatSnackBar
	) { }

	ngOnInit(): void { }

	onSubmit() {
		// TODO: Actually check login credentials
		const username = this.signInForm.get("username") as FormControl;
		const password = this.signInForm.get("password") as FormControl;

		const invalid = [username, password].find(ctrl => ctrl.invalid);
		if (invalid !== undefined) {
			alert("Wrong credentials.");
		} else {

			const credentials = {
				username: username.value as String,
				password: password.value as String,
				role: "admin" as UserRole,
			}

			this.usersService.signIn(credentials)
				.subscribe(({ userId }) => {
					if (userId === undefined) {
						console.log("wrong username / password");
						this._snackBar.open("Wrong Username or Password!", undefined, { duration: 3000 });
					} else {
						console.log(`logged in as userId: ${userId}`);
						localStorage.setItem("userid", userId.toString());
						this.router.navigate(['/admin/home']);
					}
				})
		}
	}

}
