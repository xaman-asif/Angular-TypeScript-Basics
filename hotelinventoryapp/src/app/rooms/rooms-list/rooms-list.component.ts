import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {RoomList} from "../rooms";

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  @Input() rooms: RoomList[] | null= [];
  @Input() title: String = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {
  }

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
}
