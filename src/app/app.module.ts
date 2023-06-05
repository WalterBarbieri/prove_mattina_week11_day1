import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './user/user.component';
import { UserComponent } from './users/users.component';

const rotte : Route [] = [
  {
    path: 'Utente',
    component: UserComponent
  },
  {
    path: 'Utenti',
    component: UsersComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotte)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
