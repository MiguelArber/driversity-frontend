import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountCreateComponent } from './user-account-create/user-account-create.component';
import { MatchListComponent } from './match-list/match-list.component';

const routes: Routes = [
  {
      path:  'account',
      component:  UserAccountComponent
  },
  {
    path:  'create-account',
    component:  UserAccountCreateComponent
  },
  {
      path:  'match',
      component:  MatchListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
