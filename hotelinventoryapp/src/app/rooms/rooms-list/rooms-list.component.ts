import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() hotelName: string = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnInit(): void {}

  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['hotelName'] && !changes['hotelName'].firstChange) {
      this.hotelName = this.hotelName.toUpperCase();
    }
    console.log(changes);
  }
}
