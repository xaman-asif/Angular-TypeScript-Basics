import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {RoomsComponent} from "./rooms/rooms.component";
import {EmployeeComponent} from "./employee/employee.component";

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
}];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  }
)
export class AppRoutingModule {
}
