import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    ProfileRoutingModule,
    CommonModule
  ],
  declarations: [ProfileComponent]
})
export class HomePizzaDeliveryModule { }