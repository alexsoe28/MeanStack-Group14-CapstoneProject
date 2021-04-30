import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserloginComponent } from './components/user/userlogin/userlogin.component';
import { UsersignupComponent } from './components/user/usersignup/usersignup.component';
import { UserpanelComponent } from './components/user/userpanel/userpanel.component';
import { loginAuthGuard } from './loginAuthGuard';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent } from './components/admin/products/add/add.component';
import { DeleteComponent } from './components/admin/products/delete/delete.component';
import { UpdateComponent } from './components/admin/products/update/update.component';
import { ViewComponent } from './components/admin/requests/view/view.component';
import { HomeComponent } from './components/admin/home/home.component';
import { RootComponent } from './components/root/root.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LoginComponent } from './components/employee/login/login/login.component';
import { PanelComponent } from './components/employee/panel/panel/panel.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

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
		
		// Employee
    LoginComponent,
    PanelComponent,

    // User
    UserloginComponent,
    UsersignupComponent,
    UserpanelComponent,
    EmployeeRequestComponent,
    UpdateStatusComponent,
    UnlockUserComponent,
    EditProfileComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatIconModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatFormFieldModule,
      MatTableModule,
    ],
    providers: [loginAuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
