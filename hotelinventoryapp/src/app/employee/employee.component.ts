import {Component, OnInit} from '@angular/core';
import {RoomsService} from "../rooms/services/rooms.service";

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private roomService: RoomsService) {
  }

  ngOnInit(): void {
  }

}
