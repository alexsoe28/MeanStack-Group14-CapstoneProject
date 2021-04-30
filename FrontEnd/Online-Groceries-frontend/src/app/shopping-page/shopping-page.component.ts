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
  shoppingCart:Array<any> = [];
  underStockedMsg = "";

  constructor(public productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products=>{this.products = products as any;});
  }
  insert(produceObject:any){
    let updated = false;
    let updatedPrice = 0;
    this.underStockedMsg = "";
    for(let i = 0; i < this.shoppingCart.length; i++){
      if(this.shoppingCart[i].name == produceObject.name){
        let newQuantity = this.shoppingCart[i].quantity + produceObject.quantity;
        if(this.products[i].stockInventory < newQuantity){
          this.underStockedMsg = "Not enough " + this.products[i].name + "s in stock";
          return;
        }
        this.shoppingCart[i].quantity = newQuantity;
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
    this.underStockedMsg = "";
    let produceObject = {};
    let totalPrice = 0;
    for(let i = 0; i < this.products.length; i ++){
      if(this.products[i].name == name){
        if(this.products[i].stockInventory < amount.quantity){
          this.underStockedMsg = "Not enough " + this.products[i].name + "s in stock";
          return;
        }
        totalPrice = this.products[i].price * amount.quantity;
        produceObject = { productId: this.products[i]._id, name:name, quantity:amount.quantity, price:totalPrice}
        break;
      }
    }
    this.insert(produceObject);
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    if(this.underStockedMsg == ""){
      form.resetForm();
    }
  }
}
