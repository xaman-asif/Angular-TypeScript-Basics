import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Duluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      roomPrice: 500,
      checkInTime: new Date(),
    },
    {
      roomNumber: 2,
      roomType: 'Gorib Room',
      amenities: 'Fan, No Wi-Fi, Radio, Toilet, Food Order',
      roomPrice: 100,
      checkInTime: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.hideRooms = !this.hideRooms;
  }
}
