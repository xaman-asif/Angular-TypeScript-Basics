import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  constructor() {}

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Duluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
        roomPrice: 500,
        checkInTime: new Date(),
        rating: 3.14,
      },
      {
        roomNumber: 2,
        roomType: 'Gorib Room',
        amenities: 'Fan, No Wi-Fi, Radio, Toilet, Food Order',
        roomPrice: 100,
        checkInTime: new Date(),
        rating: 3.16,
      },
    ];
  }

  onClick() {
    this.hideRooms = !this.hideRooms;
    this.hotelName = 'Milton Hotel';
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomPrice: 100,
      checkInTime: new Date(),
      rating: 3.15,
      roomType: 'Super',
      amenities: 'Washroom'
    }

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
