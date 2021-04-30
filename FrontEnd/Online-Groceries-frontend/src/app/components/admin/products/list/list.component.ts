import { Component, OnInit } from '@angular/core';
import { ProductItem, ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	products: ProductItem[] = []
	productsColumn = ["productId", "name", "price", "quantity"]

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
		this.productsService.getAll()
			.subscribe(data => this.products = data);
  }

	asCurrency(value: Number) {
		return value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		});
	}

}
