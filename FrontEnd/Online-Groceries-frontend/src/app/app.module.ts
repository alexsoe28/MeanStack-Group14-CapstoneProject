import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
<<<<<<< HEAD

import { ReactiveFormsModule } from "@angular/forms";

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
     RootComponent,
=======
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingPageComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
