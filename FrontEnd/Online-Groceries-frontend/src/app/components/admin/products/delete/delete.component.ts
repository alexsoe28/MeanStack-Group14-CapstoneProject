import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

	deleteProductForm = this.fb.group({
		productId: ['', [Validators.required]],
	})

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
	
	onSubmit() {
		const productId = this.deleteProductForm.get("productId") as FormControl

		if (productId.invalid) {
			console.debug("invalid ctrl: ", productId);
		} else {
			console.log(productId);
		}
	}

}
