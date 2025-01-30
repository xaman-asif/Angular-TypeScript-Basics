import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './core/guards/login.guard';
import { EmployeeComponent } from './features/employee/employee.component';
import { LoginComponent } from './features/login/login.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeComponent,
    // canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'rooms',
    loadChildren: () =>
      import('./features/rooms/rooms.module').then((m) => m.RoomsModule),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard],
  },
  {
    path: 'booking',
    loadChildren: () =>
      import('./features/booking/booking.module').then((m) => m.BookingModule),
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./features/comments/comments.module').then(
        (m) => m.CommentsModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [LoginGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
