import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomsComponent} from "./features/rooms/rooms.component";
import {EmployeeComponent} from "./features/employee/employee.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {RoomsBookingComponent} from "./features/rooms/rooms-booking/rooms-booking.component";
import {RoomsAddComponent} from "./features/rooms/rooms-add/rooms-add.component";
import {LoginComponent} from "./features/login/login.component";

const routes: Routes = [{
  path: 'rooms',
  component: RoomsComponent
}, {
  path: 'employee',
  component: EmployeeComponent
}, {
  path: '',
  redirectTo: '/rooms',
  pathMatch: 'full'
}, {
  path: 'rooms/add',
  component: RoomsAddComponent
}, {
  path: 'rooms/:id',
  component: RoomsBookingComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: '**',
  component: NotFoundComponent
}];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  }
)
export class AppRoutingModule {
}
