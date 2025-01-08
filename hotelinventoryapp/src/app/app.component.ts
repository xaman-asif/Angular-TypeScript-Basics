import {Component, Inject, OnInit} from '@angular/core';
import {localStorageToken} from "./core/models/localstorage.token";
import {sessionStorageToken} from "./core/models/sessionstorage.token";
import {InitService} from "./core/services/init.service";
import {RoomsService} from "./features/rooms/services/rooms.service";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(@Inject(localStorageToken) private localStorage: Storage,
              @Inject(sessionStorageToken) private sessionStorage: Storage, private initService: InitService, private roomService: RoomsService) {
    console.log(initService.config);
  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Syng frm localstorage');
    this.sessionStorage.setItem('name', 'Syng frm sessionStorage');
  }
}
