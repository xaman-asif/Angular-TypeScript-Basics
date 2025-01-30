import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookingComponent} from './booking.component';
import {BookingGuard} from "./guard/booking.guard";

const routes: Routes = [
  {path: '', component: BookingComponent},
  {path: ':id', component: BookingComponent, canDeactivate: [BookingGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule {
}
