import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DatePipe, NgClass, NgForOf, PercentPipe} from "@angular/common";
import {RoomList} from "../rooms";

@Component({
  selector: 'app-rooms-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    PercentPipe,
    NgClass
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss'
})
export class RoomsListComponent {
  @Input() rooms: RoomList[] = [];
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
