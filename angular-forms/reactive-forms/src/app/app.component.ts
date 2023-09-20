import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ForbiddenNameValidator} from "./shared/user-name.validators";
import {PasswordValidator} from "./shared/password.validator";
import {RegistrationService} from "./registration.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  registrationForm: FormGroup = new FormGroup({})
  // });
  protected readonly onsubmit = onsubmit;

  constructor(private formBuilder: FormBuilder, private _registrationService: RegistrationService) {
  }

  get userName() {
    return this.registrationForm.get('userName')
  }

  get email() {
    return this.registrationForm.get('email')
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray
  }

  addAlternateEmail() {
    this.alternateEmails.push(this.formBuilder.control(''))
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
      }),

      alternateEmails: this.formBuilder.array([])
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

  onSubmit() {
    console.log(this.registrationForm.value)
    this._registrationService.register(this.registrationForm.value).subscribe(
      response => console.log('Success!', response),
      error => console.log('Error!', error)
    )
  }
}
