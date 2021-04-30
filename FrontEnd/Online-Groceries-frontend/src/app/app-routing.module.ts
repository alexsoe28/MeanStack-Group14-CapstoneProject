import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent as AdminAddProductComponent } from "./components/admin/products/add/add.component";
import { UpdateComponent as AdminUpdateProductComponent } from "./components/admin/products/update/update.component";
import { DeleteComponent as AdminDeleteProductComponent } from "./components/admin/products/delete/delete.component";
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { RootComponent } from './components/root/root.component';
import { LoginComponent } from './components/employee/login/login/login.component';
import { PanelComponent } from './components/employee/panel/panel/panel.component';


const routes: Routes = [
	// Root
	{ path: "", component: RootComponent },
	// Employee
	{ path: "employee/login", component: LoginComponent },
	{ path: "employee/panel", component: PanelComponent },
	// Admin
	{ path: "admin/signin", component: SignInComponent },
	{
		path: "admin/home", component: HomeComponent,
		children: [
			{ path: "addProducts", component: AdminAddProductComponent, outlet: "adminHome" },
			{ path: "updateProducts", component: AdminUpdateProductComponent, outlet: "adminHome" },
			{ path: "deleteProducts", component: AdminDeleteProductComponent, outlet: "adminHome" },
		]
	},
	// User
	{ path: "user/browseShop", component: ShoppingPageComponent },
	{ path: "user", redirectTo: "/user/browseShop", pathMatch: "full" },
	{ path: "admin", redirectTo: "/admin/signin", pathMatch: "full" },
	{ path: "employee", redirectTo: "/employee/login", pathMatch: "full" }


];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
