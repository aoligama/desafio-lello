import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './members/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/members', pathMatch: 'full'
  },
  {
    path: 'members', component: MembersComponent //rota dos membros 
  },
  { 
    path: 'members/:github_login', component: ProfileComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
