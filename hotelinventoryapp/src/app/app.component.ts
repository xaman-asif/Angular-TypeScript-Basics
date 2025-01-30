import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { localStorageToken } from './core/models/localstorage.token';
import { sessionStorageToken } from './core/models/sessionstorage.token';
import { InitService } from './core/services/init.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    @Inject(sessionStorageToken) private sessionStorage: Storage,
    private initService: InitService,
    private router: Router
  ) {
    // console.log(initService.config);
  }

  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })

    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe((event) => {
        // console.log('Navigation Started');
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        // console.log('Navigation Completed');
      });

    this.localStorage.setItem('name', 'Syng frm localstorage');
    this.sessionStorage.setItem('name', 'Syng frm sessionStorage');
  }
}
