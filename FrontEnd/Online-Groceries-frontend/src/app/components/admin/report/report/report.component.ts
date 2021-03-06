import { Component, OnInit } from '@angular/core';
import { Order, OrdersService } from 'src/app/services/orders/orders.service';

@Component({
	selector: 'app-report',
	templateUrl: './report.component.html',
	styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

	orders: Order[] = [];
	orderColumn = ["orderId", "userId", "status", "timestamp"];

	constructor(private ordersService: OrdersService) { }

	ngOnInit(): void {
		this.ordersService.getAll()
			.subscribe(data => this.orders = data);
	}

	asCurrency(value: Number) {
		return value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	}
}
