import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountCreateComponent } from './user-account-create/user-account-create.component';
import { MatchListComponent } from './match-list/match-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAccountComponent,
    UserAccountCreateComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
