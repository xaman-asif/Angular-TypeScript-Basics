import { Injectable } from '@angular/core';
import {RoomList} from "../rooms";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  getRooms(): RoomList[] {
    return [
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
}
