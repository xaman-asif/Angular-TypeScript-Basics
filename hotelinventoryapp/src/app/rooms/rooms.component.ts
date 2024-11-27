import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {RoomList} from "./rooms";
import {JsonPipe, NgIf} from "@angular/common";
import {RoomsListComponent} from "./rooms-list/rooms-list.component";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [
    RoomsListComponent,
    JsonPipe,
    NgIf,
    HeaderComponent
  ],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss',
})
export class RoomsComponent implements OnInit, AfterViewInit {

  roomList: RoomList[] = [];

  selectedRoom !: RoomList;

  hideRooms = false;

  title = 'Room List'

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomList = this.roomService.getRooms();
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

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }
}
