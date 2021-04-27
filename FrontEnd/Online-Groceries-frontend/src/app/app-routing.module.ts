import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/admin/home/home.component';
import { SignInComponent } from './components/admin/signin/signin.component';

const routes: Routes = [
	{ path: "admin/signin", component: SignInComponent },
	{ path: "admin/home", component: HomeComponent },
	{ path: "", redirectTo: "/admin/signin", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
