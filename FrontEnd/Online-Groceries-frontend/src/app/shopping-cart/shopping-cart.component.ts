import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart:Array<any> = []
  displayedColumns: string[] = ['name', 'quantity', 'price'];
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('shoppingCart')){
      this.shoppingCart= JSON.parse(localStorage['shoppingCart']);
    }
  }
  getTotalCost() {
    return this.shoppingCart.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
