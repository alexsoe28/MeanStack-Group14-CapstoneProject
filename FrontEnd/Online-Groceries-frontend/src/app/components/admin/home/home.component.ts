import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	homeDirectory = [
		{
			title: "Products",
			items: [
				{title: "Add Products", routerLink: "addProducts"},
				{title: "Update Products", routerLink: "updateProducts"},
				{title: "Delete Products", routerLink: "deleteProducts"},
				{title: "List Products", routerLink: "listProducts"},
			]
		},
		{
			title: "Employees",
			items: [
				{title: "Add Employees", routerLink: "addEmployees"},
				{title: "Delete Employees", routerLink: "deleteEmployees"},
			]
		},
		{
			title: "Requests",
			items: [
				{title: "View Requests", routerLink: "viewAdminRequests"},
			]
		},
		{
			title: "Reports",
			items: [
				{title: "Generate Report", routerLink: "generateReport"},
			]
		},
	]

	constructor(private router: Router) { }

	ngOnInit(): void { }

	logout() {
		localStorage.removeItem("userid");
		this.router.navigate(["/"]);
	}

}
