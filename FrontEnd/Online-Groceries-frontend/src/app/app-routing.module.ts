import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginAuthGuard } from './loginAuthGuard';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { UsersignupComponent } from './usersignup/usersignup.component';

const routes: Routes = [
  {path:"\login", component:UserloginComponent},
  {path:"\signup", component:UsersignupComponent},
  {path:"\dashboard", component:UserpanelComponent,canActivate:[loginAuthGuard]},
  {path:"", redirectTo:"\login",pathMatch:"full"}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
