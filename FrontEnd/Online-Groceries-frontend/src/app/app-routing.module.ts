import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { SignInComponent } from './components/admin/signin/signin.component';
import { AddComponent as AdminAddProductComponent } from "./components/admin/products/add/add.component";
import { UpdateComponent as AdminUpdateProductComponent } from "./components/admin/products/update/update.component";
import { DeleteComponent as AdminDeleteProductComponent } from "./components/admin/products/delete/delete.component";

const routes: Routes = [
	{ path: "admin/signin", component: SignInComponent },
	{
		path: "admin/home", component: HomeComponent,
		children: [
			{ path: "addProducts", component: AdminAddProductComponent, outlet: "adminHome" },
			{ path: "updateProducts", component: AdminUpdateProductComponent, outlet: "adminHome" },
			{ path: "deleteProducts", component: AdminDeleteProductComponent, outlet: "adminHome" },
		]
	},
	{ path: "", redirectTo: "/admin/signin", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
