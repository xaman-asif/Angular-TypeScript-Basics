import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  isAdmin = false;

  constructor() {
  }

  login(email: string, password: string) {
    if (email === "admin@gmail.com" && password === "Admin") {
      this.isLoggedIn = true;
      this.isAdmin = true;
    }
    if (email === "user@gmail.com" && password === "User") {
      this.isAdmin = false;
    }

    return this.isLoggedIn;
  }
}
