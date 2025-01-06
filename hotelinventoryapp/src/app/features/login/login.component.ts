import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'hinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email !: string;
  password !: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    if (this.email === "admin@gmail.com" && this.password === "Admin") {
      // alert("Login Successfully")
      this.router.navigate(['/rooms', 'add']);
    }
  }
}
