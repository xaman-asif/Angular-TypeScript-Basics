import {Inject, Injectable} from '@angular/core';
import {RoomList} from "../rooms";
import {APP_SERVICE_CONFIG} from "../../AppConfig/appconfig.service";
import {AppConfig} from "../../AppConfig/appconfig.interface";

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log(config.apiEndpoint);
  }

  getRooms(): RoomList[] {
    return [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
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
