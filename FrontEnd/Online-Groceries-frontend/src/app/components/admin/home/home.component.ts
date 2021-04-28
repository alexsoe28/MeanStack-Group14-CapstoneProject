import { Component, OnInit } from '@angular/core';

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
			]
		},
		{
			title: "Requests",
			items: [
				{title: "View Requests", routerLink: "addProducts"},
			]
		},
	]

	constructor() { }

	ngOnInit(): void {
	}

}
