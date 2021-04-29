import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingPageComponent } from './shopping-page/shopping-page.component';
import { EmployeeRequestComponent } from './employee-request/employee-request.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingPageComponent,
    EmployeeRequestComponent,
    UpdateStatusComponent,
    UnlockUserComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
