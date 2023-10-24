import {InjectionToken} from "@angular/core";

// we can use this token to inject a value into a service
// this time we are injecting a value into a component
export const localStorageToken =
  new InjectionToken<any>('local storage', {
    providedIn: 'root',
    factory() {
      return [window.innerWidth, window.innerHeight]
    }
  })
