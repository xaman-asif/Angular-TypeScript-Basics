import {Inject, Injectable} from '@angular/core';
import {RoomList} from '../rooms';
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  roomList: RoomList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(this.config.apiEndpoint);
  }

  getRooms() {
    return this.roomList;
  }
}
