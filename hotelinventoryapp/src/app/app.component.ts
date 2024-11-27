import {Component} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";
import {EmployeeComponent} from './employee/employee.component';

@Component({
  selector: 'hinv-root',
  standalone: true,
  imports: [RoomsComponent, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
