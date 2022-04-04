import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./features/profile/profile-routing.module').then(m => m.ProfileRoutingModule)

    },
    {
      path: 'myProfile',
      loadChildren: () => import('./features/profile/profile-routing.module').then(m => m.ProfileRoutingModule)

    },
    {
      path: 'yourBuddy',
      loadChildren: () => import('./features/your-buddy/your-buddy-routing.module').then(m => m.YourBuddyRoutingModule)

    },
    {
      path: 'connections',
      loadChildren: () => import('./features/connections/connections-routing.module').then(m => m.ConnectionsRoutingModule)

    },
    {
      path: 'collegeNews',
      loadChildren: () => import('./features/college-news/college-news-routing.module').then(m => m.CollegeNewsRoutingModule)

    },
    {
      path: 'groups',
      loadChildren: () => import('./features/groups/groups-routing.module').then(m => m.GroupsRoutingModule)

    },
    {
      path: 'queries',
      loadChildren: () => import('./features/queries/queries-routing.module').then(m => m.QueriesRoutingModule)

    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
