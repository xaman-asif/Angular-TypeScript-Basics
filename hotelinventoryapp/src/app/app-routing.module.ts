import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {EmployeeComponent} from "./features/employee/employee.component";
import {NotFoundComponent} from "./features/not-found/not-found.component";
import {LoginComponent} from "./features/login/login.component";

const routes: Routes = [{
  path: 'employee',
  component: EmployeeComponent
}, {
  path: '',
  redirectTo: '/rooms',
  pathMatch: 'full'
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
