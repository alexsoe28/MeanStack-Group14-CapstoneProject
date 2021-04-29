import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  shoppingCart:Array<any> = [];
  constructor() { }

  ngOnInit(): void {
  }
  insert(produceObject:any){
    let updated = false;
    let updatedPrice;
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
  addToList(groceryItem:any, form: NgForm){
    if(localStorage.getItem('shoppingCart') != null){
      this.shoppingCart = JSON.parse(localStorage['shoppingCart']);
    }
    let produceObject = {};
    if(groceryItem.apple){
      let quantity = groceryItem.apple;
      let price = parseFloat((groceryItem.apple * 1.32).toFixed(2));
      produceObject = {name:"apple", quantity:quantity, price:price};
    }
    else if(groceryItem.orange){
      let quantity = groceryItem.orange;
      let price = parseFloat((groceryItem.orange * 1.33).toFixed(2));
      produceObject = {name:"orange", quantity:quantity, price:price};
    }
    else if(groceryItem.banana){
      let quantity = groceryItem.banana;
      let price = parseFloat((groceryItem.banana * 0.32).toFixed(2));
      produceObject = {name:"banana", quantity:quantity, price:price};
    }
    else if(groceryItem.pear){
      let quantity = groceryItem.pear;
      let price = parseFloat((groceryItem.pear * 0.94).toFixed(2));
      produceObject = {name:"pear", quantity:quantity, price:price};
    }
    else if(groceryItem.pineapple){
      let quantity = groceryItem.pineapple;
      let price = parseFloat((groceryItem.pineapple * 3.50).toFixed(2));
      produceObject = {name:"pineapple", quantity:quantity, price:price};
    }
    else if(groceryItem.strawberry){
      let quantity = groceryItem.strawberry;
      let price = parseFloat((groceryItem.strawberry* 3.33).toFixed(2));
      produceObject = {name:"strawberry", quantity:quantity, price:price};
    }
    else if(groceryItem.blueberry){
      let quantity = groceryItem.blueberry;
      let price = parseFloat((groceryItem.blueberry* 3.33).toFixed(2));
      produceObject = {name:"blueberry", quantity:quantity, price:price};
    }
    else if(groceryItem.watermelon){
      let quantity = groceryItem.watermelon;
      let price = parseFloat((groceryItem.watermelon* 3.99).toFixed(2));
      produceObject = {name:"watermelon", quantity:quantity, price:price};
    }
    else if(groceryItem.kale){
      let quantity = groceryItem.kale;
      let price = parseFloat((groceryItem.kale* 2.49).toFixed(2));
      produceObject = {name:"kale", quantity:quantity, price:price};
    }
    else if(groceryItem.broccoli){
      let quantity = groceryItem.broccoli;
      let price = parseFloat((groceryItem.broccoli* 2.24).toFixed(2));
      produceObject = {name:"broccoli", quantity:quantity, price:price};
    }
    else if(groceryItem.tomato){
      let quantity = groceryItem.tomato;
      let price = parseFloat((groceryItem.tomato* 1.00).toFixed(2));
      produceObject = {name:"tomato", quantity:quantity, price:price};
    }
    else if(groceryItem.onion){
      let quantity = groceryItem.onion;
      let price = parseFloat((groceryItem.onion* 1.12).toFixed(2));
      produceObject = {name:"onion", quantity:quantity, price:price};
    }
    else if(groceryItem.celery){
      let quantity = groceryItem.celery;
      let price = parseFloat((groceryItem.celery* 2.29).toFixed(2));
      produceObject = {name:"celery", quantity:quantity, price:price};
    }
    else if(groceryItem.carrot){
      let quantity = groceryItem.carrot;
      let price = parseFloat((groceryItem.carrot* 0.16).toFixed(2));
      produceObject = {name:"carrot", quantity:quantity, price:price};
    }
    else if(groceryItem.squash){
      let quantity = groceryItem.squash;
      let price = parseFloat((groceryItem.squash* 1.20).toFixed(2));
      produceObject = {name:"squash", quantity:quantity, price:price};
    }
    else if(groceryItem.cauliflower){
      let quantity = groceryItem.cauliflower;
      let price = parseFloat((groceryItem.cauliflower* 2.75).toFixed(2));
      produceObject = {name:"cauliflower", quantity:quantity, price:price};
    }
    else{
      return;
    }
    this.insert(produceObject);
    localStorage.setItem('shoppingCart', JSON.stringify(this.shoppingCart));
    form.resetForm();
  }

}
