import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonComponentsModule } from './common/common-components.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './features/profile/profile/profile.component';
import { YourBuddyComponent } from './features/your-buddy/your-buddy/your-buddy.component';
import { ConnectionsComponent } from './features/connections/connections/connections.component';
import { ProfileDetailsComponent } from './layout/profile-details/profile-details.component';
import { ChatComponent } from './layout/chat/chat.component';
import { ProfileInfoComponent } from './layout/profile-info/profile-info.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    YourBuddyComponent,
    ConnectionsComponent,
    ProfileDetailsComponent,
    ChatComponent,
    ProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonComponentsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
