import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

	constructor(private fb: FormBuilder, private router: Router) { }

	ngOnInit(): void { }

	onSubmit() {
		// TODO: Actually check login credentials
		const username = this.signInForm.get("username") as FormControl;
		const password = this.signInForm.get("password") as FormControl;

		const invalid = [username, password].find(ctrl => ctrl.invalid);
		if (invalid !== undefined) {
			alert("Wrong credentials.");
		} else {
			this.router.navigate(['/admin/home']);
		}
	}

}
