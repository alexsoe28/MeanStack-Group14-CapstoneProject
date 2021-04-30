import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart:Array<any> = [];
  checkoutOrder:Array<any> = [];
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  invalidDeleteItem = false;
  updateErrorMsg = "";
  checkoutComplete = false;

  constructor(public ordersService:OrdersService) { }

  ngOnInit(): void {
    if(localStorage.getItem('shoppingCart')){
      this.shoppingCart=JSON.parse(localStorage['shoppingCart']);
    }
  }
  getTotalCost() {
    return this.shoppingCart.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  deleteItem(groceryItem:any, form: NgForm){
    let itemDeleted = false;
    for(let i = 0; i < this.shoppingCart.length; i++){
      if(this.shoppingCart[i].name == groceryItem.name){
        this.shoppingCart.splice(i,1);
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
        window.location.reload();
        itemDeleted = true;
        return;
      }
    }
    if(!itemDeleted){
      this.invalidDeleteItem = true;
    }
  }

  updateItem(groceryItem:any, form: NgForm){
    let itemUpdated = false;
    for(let i = 0; i < this.shoppingCart.length; i++){
      let oldPrice = this.shoppingCart[i].price;
      let oldQuantity = this.shoppingCart[i].quantity;
      if(this.shoppingCart[i].name == groceryItem.name){
        if(groceryItem.quantity > this.shoppingCart[i].stockInventory){
          this.updateErrorMsg = "Exceeds stock inventory of " + this.shoppingCart[i].name;
          return;
        }
        this.shoppingCart[i].quantity = groceryItem.quantity;
        let retailPrice = parseFloat((oldPrice/oldQuantity).toFixed(2));
        this.shoppingCart[i].price = retailPrice * groceryItem.quantity;
        localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
        window.location.reload();
        itemUpdated = true;
        return;
      }
    }
    if(!itemUpdated){
      this.updateErrorMsg = "No such item in cart!";
    }
  }

  submitCart(){
    let userid = String(localStorage.getItem('userid'));
    if(localStorage.getItem('shoppingCart')){
      this.shoppingCart=JSON.parse(localStorage['shoppingCart']);
    }
    else{
      return;
    }
    for(let i = 0; i < this.shoppingCart.length; i++){
      let orderObject = {productId: this.shoppingCart[i].productId, quantity: this.shoppingCart[i].quantity}
      this.checkoutOrder.push(orderObject);
    }
    this.ordersService.checkout({userId:userid, cart:this.checkoutOrder});
    localStorage.removeItem("shoppingCart");
  }
}
