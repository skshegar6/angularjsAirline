import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.css']
})
export class PassengerFormComponent implements OnInit {

  passengerForm = this.fb.group({
    name: [null, Validators.required],
    address: null,
    dob: null,
    seat_details: [null, Validators.required],
    passport: null
  });

  seatsLayout= {
    totalRows:10,
    seatsPerRow:6,
    seatNaming:'rowType',
    booked:['1A','5D']   
  };

  getSelectedSeats(event:any){
    //Do stuff
    console.log(event)
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  
  }
  onSubmit() {
    alert('Thanks!');
  }
}


