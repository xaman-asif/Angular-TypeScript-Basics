import {Component, OnInit, ViewChild} from '@angular/core';
import {RoomList} from "./rooms";
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";
import {Observable} from "rxjs";

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  roomList: RoomList[] = [];

  selectedRoom !: RoomList;

  hideRooms = false;

  title = 'Room List'

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    observer.error('error');
  });

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomService: RoomsService) {

  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe(rooms => {
      // this.stream.subscribe((data) => console.log(data))
      // this.stream.subscribe((data) => console.log(data))
      this.stream.subscribe({
        next: (value) => console.log(value),
        complete: () => console.log("complete"),
        error: (err) => console.log(err)
      })
      this.roomList = rooms;
    })
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
    // this.roomList = [...this.roomList, room]
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomList = data;
      console.log(this.roomList);
    })
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "List of Room"
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Single',
      roomPrice: 100,
      amenities: 'TV, AC, WiFi',
      checkInTime: new Date('2021-09-06'),
      rating: 4
    };


    this.roomService.editRoom(room).subscribe((data) => {
      this.roomList = data;
      console.log(this.roomList);
    })
  }

  deleteRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Single',
      roomPrice: 100,
      amenities: 'TV, AC, WiFi',
      checkInTime: new Date('2021-09-06'),
      rating: 4
    };


    this.roomService.deleteRoom(room).subscribe((data) => {
      this.roomList = data;
      console.log(this.roomList);
    })
  }
}
