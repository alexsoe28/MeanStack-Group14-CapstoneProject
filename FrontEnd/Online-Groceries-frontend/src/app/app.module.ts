import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';

import { ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent } from './components/admin/products/add/add.component';
import { DeleteComponent } from './components/admin/products/delete/delete.component';
import { UpdateComponent } from './components/admin/products/update/update.component';
import { ViewComponent } from './components/admin/requests/view/view.component';
import { HomeComponent } from './components/admin/home/home.component';
import { RootComponent } from './components/root/root.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/employee/login/login/login.component';
import { PanelComponent } from './components/employee/panel/panel/panel.component';

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
    LoginComponent,
    PanelComponent
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
