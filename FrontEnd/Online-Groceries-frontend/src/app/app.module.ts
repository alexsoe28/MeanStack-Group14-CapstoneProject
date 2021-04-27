import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from "@angular/forms";

import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent } from './components/admin/products/add/add.component';
import { DeleteComponent } from './components/admin/products/delete/delete.component';
import { UpdateComponent } from './components/admin/products/update/update.component';
import { ViewComponent } from './components/admin/requests/view/view.component';
import { HomeComponent } from './components/admin/home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    SignInComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    ViewComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

		ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
