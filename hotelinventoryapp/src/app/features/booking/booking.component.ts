import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";

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
      roomId: new FormControl({value: '2', disabled: true}),

      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
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
          guestName: [''],
          guestEmail: [''],
          age: [''],
        })
      ])
    })
  }

  addBooking() {
    console.log(this.bookingFrom.getRawValue());
    //getRawValue() will also fetch disabled form fields
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
