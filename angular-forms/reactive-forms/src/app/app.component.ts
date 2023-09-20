import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ForbiddenNameValidator} from "./shared/user-name.validators";
import {PasswordValidator} from "./shared/password.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) {
  }

  get userName() {
    return this.registrationForm.get('userName')
  }

  get email() {
    return this.registrationForm.get('email')
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4), ForbiddenNameValidator([/password/, /admin/])]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],

      address: this.formBuilder.group({
        city: [''],
        state: [''],
        postalCode: ['']
      })
    }, {validator: PasswordValidator})

    this.registrationForm.get('subscribe')?.valueChanges.subscribe(
      checkedValue => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required)
        } else {
          email?.clearValidators()
        }

        email?.updateValueAndValidity();
      }
    )
  }

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
}
