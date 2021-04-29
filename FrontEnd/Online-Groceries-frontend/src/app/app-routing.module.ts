import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent as AdminAddProductComponent } from "./components/admin/products/add/add.component";
import { UpdateComponent as AdminUpdateProductComponent } from "./components/admin/products/update/update.component";
import { DeleteComponent as AdminDeleteProductComponent } from "./components/admin/products/delete/delete.component";
import { ViewComponent as ViewAdminRequestsComponent } from "./components/admin/requests/view/view.component";
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RootComponent } from './components/root/root.component';
import { loginAuthGuard } from './loginAuthGuard';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
	// Root
	{ path: "", component: RootComponent },
	// Admin
	{ path: "admin/signin", component: SignInComponent },
	{
		path: "admin/home", component: HomeComponent,
		children: [
			{ path: "addProducts", component: AdminAddProductComponent, outlet: "adminHome" },
			{ path: "updateProducts", component: AdminUpdateProductComponent, outlet: "adminHome" },
			{ path: "deleteProducts", component: AdminDeleteProductComponent, outlet: "adminHome" },
			{ path: "viewAdminRequests", component: ViewAdminRequestsComponent, outlet: "adminHome" },
		]
	},
	{ path: "admin", redirectTo: "/admin/signin", pathMatch: "full" },
	// User
	{ path: "user/browseShop", component: ShoppingPageComponent },
  { path: "user/browseShop/myCart", component: ShoppingCartComponent },
	{ path: "user/login", component:UserloginComponent},
	{ path: "user/signup", component:UsersignupComponent},
	{ path: "user/dashboard", component:UserpanelComponent,canActivate:[loginAuthGuard]},
	{ path: "user", redirectTo:"user/login",pathMatch:"full"}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
