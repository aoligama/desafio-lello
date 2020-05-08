import { MembersComponent } from './members/members.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: '/members', pathMatch: 'full'
  },
  {
    path: 'members', component: MembersComponent //rota dos membros 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
