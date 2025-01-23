import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./features/employee/employee.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {LoginComponent} from "./features/login/login.component";

const routes: Routes = [{
  path: 'employee',
  component: EmployeeComponent,
  // canActivate: [LoginGuard]
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'rooms',
  loadChildren: () => import ('./features/rooms/rooms.module').then(m => m.RoomsModule),
  // canActivate: [LoginGuard],
  // canLoad: [LoginGuard]
}, {
  path: 'booking/:id',
  loadChildren: () => import('./features/booking/booking.module').then(m => m.BookingModule)
}, {
  path: '**',
  component: NotFoundComponent,
  // canActivate: [LoginGuard]
}];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  }
)
export class AppRoutingModule {
}
