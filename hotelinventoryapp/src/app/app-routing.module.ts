import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./features/employee/employee.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {LoginComponent} from "./features/login/login.component";

const routes: Routes = [{
  path: 'employee',
  component: EmployeeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'rooms',
  loadChildren: () => import ('./features/rooms/rooms.module').then(m => m.RoomsModule)
}, {
  path: 'booking',
  loadChildren: () => import('./features/booking/booking.module').then(m => m.BookingModule)
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
