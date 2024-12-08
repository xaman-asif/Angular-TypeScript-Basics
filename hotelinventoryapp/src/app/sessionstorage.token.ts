import {InjectionToken} from "@angular/core";

export const sessionStorageToken = new InjectionToken('session storage', {
  providedIn: 'root',
  factory() {
    return sessionStorage;
  }
})
