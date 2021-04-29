import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent } from './components/admin/products/add/add.component';
import { DeleteComponent } from './components/admin/products/delete/delete.component';
import { UpdateComponent } from './components/admin/products/update/update.component';
import { ViewComponent } from './components/admin/requests/view/view.component';
import { HomeComponent } from './components/admin/home/home.component';
import { RootComponent } from './components/root/root.component';


@NgModule({
  declarations: [
    AppComponent,
    
    // Admin
    SignInComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    ViewComponent,
    HomeComponent,

    //  Shopping Cart
    ShoppingPageComponent,
    ShoppingCartComponent,
    RootComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule { }
