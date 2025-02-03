import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { localStorageToken } from 'src/app/token/localstorage.token';
import { sessionStorageToken } from 'src/app/token/sessionstorage.token';

@Component({
  selector: 'app-local-storage',
  standalone: true,
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss'],
  imports: [ReactiveFormsModule],
})
export class LocalStorageComponent implements OnInit {
  constructor(
    @Inject(localStorageToken) private localStorage: Storage,
    @Inject(sessionStorageToken) private sessionStorage: Storage
  ) {}
  ngOnInit(): void {
    this.localStorageValue.valueChanges.subscribe((data) => {
      this.localStorage.setItem('localVar1', String(data));
    });

    this.sessionStorageValue.valueChanges.subscribe((data) => {
      this.sessionStorage.setItem('sessionVar1', String(data));
    });
  }

  localStorageValue = new FormControl({
    updateOn: 'blur',
  });

  sessionStorageValue = new FormControl({
    updateOn: 'blur',
  });
}
