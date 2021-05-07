import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { MyCartComponent } from './mycart/mycart.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'SignUp', component: SignupComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'mycart', component: MyCartComponent },
  { path: '*', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [
  MenuComponent,
  MyCartComponent,
  SignupComponent,
  AppComponent
];
