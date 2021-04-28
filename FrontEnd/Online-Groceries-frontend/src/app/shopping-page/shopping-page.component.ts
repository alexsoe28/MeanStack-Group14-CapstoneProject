import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ListService } from '../list.service';
@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent implements OnInit {
  shoppingCart:Array<any> = [];
  constructor(public service: ListService) { }

  ngOnInit(): void {
  }
  insert(produceObject:any){
    let updated = false;
    for(let i = 0; i < this.shoppingCart.length; i++){
      if(this.shoppingCart[i].name == produceObject.name){
        this.shoppingCart[i].quantity += produceObject.quantity;
        this.shoppingCart[i].price += produceObject.price;
        updated = true;
        break;
      }
    }
    if(updated == false){
      this.shoppingCart.push(produceObject);
    }
  }
  checkout(groceryItem:any, form: NgForm){
    let produceObject = {};
    if(groceryItem.apple){
      let quantity = groceryItem.apple;
      let price = (groceryItem.apple * 1.32).toFixed(2);
      produceObject = {name:"apple", quantity:quantity, price:price};
      console.log(produceObject);
    }
    if(groceryItem.orange){
      let quantity = groceryItem.orange;
      let price = (groceryItem.orange * 1.33).toFixed(2);
      produceObject = {name:"orange", quantity:quantity, price:price};
    }
    if(groceryItem.banana){
      let quantity = groceryItem.banana;
      let price = (groceryItem.banana * 0.32).toFixed(2);
      produceObject = {name:"banana", quantity:quantity, price:price};
    }
    if(groceryItem.pear){
      let quantity = groceryItem.pear;
      let price = (groceryItem.pear * 0.94).toFixed(2);
      produceObject = {name:"pear", quantity:quantity, price:price};
    }
    if(groceryItem.pineapple){
      let quantity = groceryItem.pineapple;
      let price = (groceryItem.pineapple * 3.50).toFixed(2);
      produceObject = {name:"pineapple", quantity:quantity, price:price};
    }
    if(groceryItem.strawberry){
      let quantity = groceryItem.strawberry;
      let price = (groceryItem.strawberry* 3.33).toFixed(2);
      produceObject = {name:"strawberry", quantity:quantity, price:price};
    }
    if(groceryItem.blueberry){
      let quantity = groceryItem.blueberry;
      let price = (groceryItem.blueberry* 3.33).toFixed(2);
      produceObject = {name:"blueberry", quantity:quantity, price:price};
    }
    if(groceryItem.watermelon){
      let quantity = groceryItem.watermelon;
      let price = (groceryItem.watermelon* 3.99).toFixed(2);
      produceObject = {name:"watermelon", quantity:quantity, price:price};
    }
    if(groceryItem.kale){
      let quantity = groceryItem.kale;
      let price = (groceryItem.kale* 2.49).toFixed(2);
      produceObject = {name:"kale", quantity:quantity, price:price};
    }
    if(groceryItem.broccoli){
      let quantity = groceryItem.broccoli;
      let price = (groceryItem.broccoli* 2.24).toFixed(2);
      produceObject = {name:"broccoli", quantity:quantity, price:price};
    }
    if(groceryItem.tomato){
      let quantity = groceryItem.tomato;
      let price = (groceryItem.tomato* 1.00).toFixed(2);
      produceObject = {name:"tomato", quantity:quantity, price:price};
    }
    if(groceryItem.onion){
      let quantity = groceryItem.onion;
      let price = (groceryItem.onion* 1.12).toFixed(2);
      produceObject = {name:"onion", quantity:quantity, price:price};
    }
    if(groceryItem.celery){
      let quantity = groceryItem.celery;
      let price = (groceryItem.celery* 2.29).toFixed(2);
      produceObject = {name:"celery", quantity:quantity, price:price};
    }
    if(groceryItem.carrot){
      let quantity = groceryItem.carrot;
      let price = (groceryItem.carrot* 0.16).toFixed(2);
      produceObject = {name:"carrot", quantity:quantity, price:price};
    }
    if(groceryItem.squash){
      let quantity = groceryItem.squash;
      let price = (groceryItem.squash* 1.20).toFixed(2);
      produceObject = {name:"squash", quantity:quantity, price:price};
    }
    if(groceryItem.cauliflower){
      let quantity = groceryItem.cauliflower;
      let price = (groceryItem.cauliflower* 2.75).toFixed(2);
      produceObject = {name:"cauliflower", quantity:quantity, price:price};
    }
    
    this.insert(produceObject);
    console.log(this.shoppingCart);
    form.resetForm();
  }
}
