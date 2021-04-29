import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

	addProductForm = this.fb.group({
		name: ['', [Validators.required]],
		price: ['', [Validators.required]],
		quantity: ['', [Validators.required]],
	})

	constructor(private fb: FormBuilder, private productsService: ProductsService) { }

	ngOnInit(): void { }

	onSubmit() {
		const [name, price, quantity] = ["name", "price", "quantity"].map(
			key => this.addProductForm.get(key) as FormControl
		)

		const invalidCtrl = [name, price, quantity].find(ctrl => ctrl.invalid);

		if (invalidCtrl !== undefined) {
			console.debug("invalid ctrl: ", invalidCtrl);
		} else {
			const product = {
				name: name.value as String,
				price: price.value as Number,
				stockInventory: quantity.value as Number,
			}

			this.productsService.addProduct(product);
			console.table(product);
		}
	}

}
