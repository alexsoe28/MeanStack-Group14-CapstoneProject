import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart:Array<any> = [];
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  invalidDeleteItem = false;
  invalidUpdateItem = false;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('shoppingCart')){
      this.shoppingCart=JSON.parse(localStorage['shoppingCart']);
      console.log(this.shoppingCart);
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
    console.log(this.shoppingCart);
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
      this.invalidUpdateItem = true;
    }
  }

  submitCart(){
    let userid = localStorage.getItem("userid");

  }
}
