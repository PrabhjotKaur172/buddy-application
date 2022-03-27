import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ProfileDetailsComponent,
    ChatComponent
 
  ],
  exports: [
    ProfileDetailsComponent,
    ChatComponent
  ],
  providers: [
  
  ],
  entryComponents: [
   
  ]
})
export class CommonComponentsModule { }
