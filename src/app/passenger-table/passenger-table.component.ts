import { Component, OnInit, Input } from '@angular/core';

import { PassengerService } from '../service/passenger.service';

@Component({
  selector: 'app-passenger-table',
  templateUrl: './passenger-table.component.html',
  styleUrls: ['./passenger-table.component.css']
})
export class PassengerTableComponent implements OnInit {
  @Input() fullPassengerData:any;
  displayedColumns: string[] =['name','address','dob','seat_no','action'];
  dataSource:any;
  constructor(private passengerS: PassengerService) { }

  ngOnInit(): void {
    console.log(this.fullPassengerData)
    //this.dataSource = this.fullPassengerData.passenger.passenger;
    this.passengerS.eventSubject.subscribe((data)=>{
      console.log(data)
    })
  }

}
