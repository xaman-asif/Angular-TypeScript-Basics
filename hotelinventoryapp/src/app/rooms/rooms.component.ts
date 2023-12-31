import {AfterViewInit, Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {Room, RoomList} from './rooms';
import {HeaderComponent} from "../header/header.component";
import {RoomsService} from "./services/rooms.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = 'Hilton Hotel';

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  stream = new Observable(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;

  selectedRoom!: RoomList;


  constructor(private roomsService: RoomsService) {
  }

  ngOnInit(): void {
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed'),
      error: (err) => console.log(err)
    });

    this.roomList = this.roomsService.getRooms().subscribe((rooms: RoomList[]) => {
      this.roomList = rooms;
    })

    console.log(this.roomList);
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
      roomNumber: '4',
      roomPrice: 100,
      checkInTime: new Date(),
      rating: 3.15,
      roomType: 'Super',
      amenities: 'Washroom'
    }
    // This below practice is not recommended as it will mutate the original array
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  ngDoCheck(): void {
    // console.log('On check is called')
  }

  ngAfterViewInit(): void {
    // console.log(this.headerComponent);
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomPrice: 100,
      checkInTime: new Date(),
      rating: 3.15,
      roomType: 'Super',
      amenities: 'Washroom'
    }

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  deleteRoom() {
    this.roomsService.delete('3').subscribe((data) => {
      this.roomList = data;
    });
  }
}
