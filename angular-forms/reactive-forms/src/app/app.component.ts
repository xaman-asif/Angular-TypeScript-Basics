import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ForbiddenNameValidator} from "./shared/user-name.validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registrationForm = this.formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(4), ForbiddenNameValidator([/password/, /admin/])]],
    password: [''],
    confirmPassword: [''],

    address: this.formBuilder.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  })

  constructor(private formBuilder: FormBuilder) {
  }


  // registrationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   })
  // });

  loadApiData() {
    this.registrationForm.setValue({
      userName: 'John',
      password: '12345',
      confirmPassword: '12345',

      address: {
        city: 'Dhaka',
        state: 'Dhaka',
        postalCode: '0000'
      }
    })
  }
}
