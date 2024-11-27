import {Component, OnInit, Self} from '@angular/core';
import {RoomsService} from '../rooms/services/rooms.service';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  standalone: true,
  // providers: [RoomsService]
})
export class EmployeeComponent implements OnInit {

  constructor(@Self() private roomService: RoomsService) {
  }

  ngOnInit(): void {
  }

}
