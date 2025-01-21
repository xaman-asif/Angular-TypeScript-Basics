import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  bookingFrom !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  get guests() {
    return this.bookingFrom.get('guests') as FormArray;
  }

  ngOnInit(): void {
    this.bookingFrom = this.formBuilder.group({
      roomId: new FormControl({value: '2', disabled: true}, {
        validators: [Validators.required]
      }),

      checkinDate: ['', [Validators.required]],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: ['', [Validators.required, Validators.maxLength(11)]],
      address: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guestCount: {value: '1', disabled: true},
      guestList: new FormControl(''),
      //[''] is exactly same as new FormControl('')
      //Just a syntactic sugar
      guests: this.formBuilder.array([
        this.formBuilder.group({
          guestName: ['', [Validators.required, Validators.minLength(3)]],
          guestEmail: [''],
          age: [''],
        })
      ]),
      tnc: new FormControl(false, {
        validators: [Validators.requiredTrue]
      })
    })
  }

  addBooking() {
    console.log(this.bookingFrom.getRawValue());
    //getRawValue() will also fetch disabled form fields
    this.bookingFrom.reset({
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guestList: '',
      tnc: ''
    })
  }

  addGuest() {
    this.guests.push(
      this.formBuilder.group({
        guestName: [''],
        guestEmail: [''],
        age: new FormControl('')
      })
    )

    const guestCountControl = this.bookingFrom.get('guestCount');
    guestCountControl?.setValue(this.guests.length);
  }

  addPassport() {
    this.bookingFrom.addControl('passport', new FormControl(''));
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
