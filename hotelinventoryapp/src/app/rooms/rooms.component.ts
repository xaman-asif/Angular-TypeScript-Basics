import {Component, OnInit} from '@angular/core';
import {RoomList} from "./rooms";
import {DatePipe, JsonPipe, NgClass, NgForOf, NgIf, PercentPipe} from "@angular/common";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [
    NgClass,
    NgForOf,
    PercentPipe,
    DatePipe,
    RoomsListComponent,
    JsonPipe,
    NgIf
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit {

  roomList: RoomList[] = [];

  selectedRoom !: RoomList;

  hideRooms = false;

  title = 'Room List'

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
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '106',
      roomType: 'Single',
      roomPrice: 100,
      amenities: 'TV, AC, WiFi',
      checkInTime: new Date('2021-09-06'),
      rating: 4
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "List of Room"
  }
}
