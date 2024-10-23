import {Component, OnInit} from '@angular/core';
import {RoomList} from "./rooms";
import {DatePipe, NgClass, NgForOf, PercentPipe} from "@angular/common";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    PercentPipe,
    DatePipe,
    RoomsListComponent
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit {

  roomList: RoomList[] = [];

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: '101',
        roomType: 'Single',
        roomPrice: 100,
        amenities: 'TV, AC, WiFi',
        checkInTime: new Date('2021-09-01'),
        rating: 4
      },
      {
        roomNumber: '102',
        roomType: 'Double',
        roomPrice: 200,
        amenities: 'TV, AC, WiFi',
        checkInTime: new Date('2021-09-02'),
        rating: 5
      },
      {
        roomNumber: '103',
        roomType: 'Single',
        roomPrice: 100,
        amenities: 'TV, AC, WiFi',
        checkInTime: new Date('2021-09-03'),
        rating: 4
      },
      {
        roomNumber: '104',
        roomType: 'Double',
        roomPrice: 200,
        amenities: 'TV, AC, WiFi',
        checkInTime: new Date('2021-09-04'),
        rating: 5
      },
      {
        roomNumber: '105',
        roomType: 'Single',
        roomPrice: 100,
        amenities: 'TV, AC, WiFi',
        checkInTime: new Date('2021-09-05'),
        rating: 4
      }
    ];
  }

  roomSelected(room: RoomList) {
    console.log(room);
  }
}
