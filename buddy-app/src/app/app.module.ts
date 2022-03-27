import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './features/profile/profile.component';
import { YourBuddyComponent } from './features/your-buddy/your-buddy.component';
import { ConnectionsComponent } from './features/connections/connections.component';
import { CollegeNewsComponent } from './features/college-news/college-news.component';
import { QueriesComponent } from './features/queries/queries.component';
import { FeedbackComponent } from './features/feedback/feedback.component';
import { GroupsComponent } from './features/groups/groups.component';
import { ProfileDetailsComponent } from './common/profile-details/profile-details.component';
import { ChatComponent } from './common/chat/chat.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    YourBuddyComponent,
    ConnectionsComponent,
    CollegeNewsComponent,
    QueriesComponent,
    FeedbackComponent,
    GroupsComponent,
    ProfileDetailsComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
