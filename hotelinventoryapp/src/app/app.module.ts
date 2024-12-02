import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {HeaderComponent} from './header/header.component';
import {RoomsComponent} from './rooms/rooms.component';
import {RoomsListComponent} from './rooms/rooms-list/rooms-list.component';
import {RoomsService} from "./rooms/services/rooms.service";


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    RoomsComponent,
    RoomsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RoomsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
