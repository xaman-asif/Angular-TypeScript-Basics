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
      guestEmail: [''],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: [''],
      address: this.formBuilder.group({
        addressLine1: [''],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guestCount: [''],
      guestList: new FormControl(''),
      //[''] is exactly same as new FormControl('')
      //Just a syntactic sugar
      guests: this.formBuilder.array([
        this.formBuilder.group({
          guestName: [''],
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
        age: new FormControl('')
      })
    )
  }
}
