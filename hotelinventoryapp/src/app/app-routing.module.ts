import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomsComponent} from "./rooms/rooms.component";
import {EmployeeComponent} from "./employee/employee.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {RoomsBookingComponent} from "./rooms/rooms-booking/rooms-booking.component";

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
  path: 'rooms/:id',
  component: RoomsBookingComponent
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
