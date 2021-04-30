import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../services/products/products.service';
@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  products: {stockInventory: number, _id: String, name: String, price: number, __v: number}[] = [];
  userid = localStorage.getItem("userid");
  shoppingCart:Array<any> = [];

  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products=>{this.products = products as any;
    console.log(this.products[0].stockInventory)});
  }
  insert(produceObject:any){
    let updated = false;
    let updatedPrice = 0;
    for(let i = 0; i < this.shoppingCart.length; i++){
      if(this.shoppingCart[i].name == produceObject.name){
        this.shoppingCart[i].quantity += produceObject.quantity;
        updatedPrice = this.shoppingCart[i].price + produceObject.price;
        this.shoppingCart[i].price = updatedPrice;
        updated = true;
        return;
      }
    }
    if(updated == false){
      this.shoppingCart.push(produceObject);
    }
  }
  addToList(amount:any, form: NgForm, name:String){
    if(localStorage.getItem('shoppingCart') != null){
      this.shoppingCart = JSON.parse(localStorage['shoppingCart']);
    }
    let produceObject = {};
    let totalPrice = 0;
    for(let i = 0; i < this.products.length; i ++){
      if(this.products[i].name == name){
        totalPrice = this.products[i].price * amount.quantity;
        produceObject = { name:name, quantity:amount.quantity, price:totalPrice}
        break;
      }
    }
    this.insert(produceObject);
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    form.resetForm();
  }

}
