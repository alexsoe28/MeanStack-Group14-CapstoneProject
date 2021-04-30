import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
	selector: 'app-addfunds',
	templateUrl: './addfunds.component.html',
	styleUrls: ['./addfunds.component.css']
})
export class AddfundsComponent implements OnInit {

	funds: Number = 0;

	addFundsForm = this.fb.group({
		amount: ['', [Validators.required]],
	})

	constructor(private fb: FormBuilder, private usersService: UsersService) { }

	ngOnInit(): void {
		this.getFunds();
	}

	getFunds() {
		const userId = localStorage.getItem("userid");
		if (userId === null) { console.error(`Invalid userId`) }
		else {
			this.usersService.getUserById(userId)
				.subscribe(user => this.funds = user.wallet)
		}
	}

	onSubmit() {
		const userId = localStorage.getItem("userid");
		if (userId === null) { console.error(`Invalid userId`) }
		else {
			const newAmount = this.addFundsForm.get("amount") as FormControl;

			if (newAmount.invalid) {
				console.debug("invalid ctrl: ", newAmount);
			} else {
				const payload = {
					userId: userId,
					wallet: Number(newAmount.value).valueOf() + this.funds.valueOf(),
				}

				this.usersService.updateUserDetails(payload)
					.subscribe(doc => {
						console.log(doc);
						this.getFunds();
					},
						error => console.error(error)
					)
			}
		}
	}

	asCurrency(amount: Number) {
		return amount.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	}

}
