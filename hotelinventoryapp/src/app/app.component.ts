import {Component, Inject, OnInit, Optional} from '@angular/core';
import {localStorageToken} from "./localstorage.token";
import {sessionStorageToken} from "./sessionstorage.token";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(@Inject(localStorageToken) private localStorage: Storage,
  @Inject(sessionStorageToken) private sessionStorage: Storage) {

  }

  ngOnInit(): void {
    this.localStorage.setItem('name', 'Syng frm localstorage');
    this.sessionStorage.setItem('name', 'Syng frm sessionStorage');
  }
}
