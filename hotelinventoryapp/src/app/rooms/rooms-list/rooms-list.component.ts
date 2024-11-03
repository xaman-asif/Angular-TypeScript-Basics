import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {DatePipe, NgClass, NgForOf, PercentPipe} from "@angular/common";
import {RoomList} from "../rooms";

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [
    DatePipe,
    NgForOf,
    PercentPipe,
    NgClass
  ],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
  // changeDetection: ChangeDetectionStrategy.Default
})
export class RoomsListComponent implements OnInit, OnChanges {
  @Input() rooms: RoomList[] = [];
  @Input() title: String = '';
  @Output() selectedRoom = new EventEmitter<RoomList>();

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
