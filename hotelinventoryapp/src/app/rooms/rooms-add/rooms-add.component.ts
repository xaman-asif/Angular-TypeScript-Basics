import {Component, OnInit} from '@angular/core';
import {RoomList} from "../rooms";
import {RoomsService} from "../services/rooms.service";

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent implements OnInit {

  room: RoomList = {
    roomNumber: '',
    roomType: '',
    roomPrice: 0,
    amenities: '',
    checkInTime: new Date(),
    rating: 0
  }

  constructor(private roomsService: RoomsService) {
  }

  ngOnInit(): void {
  }

  addRoom() {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      console.log(data);
    })
  }
}
