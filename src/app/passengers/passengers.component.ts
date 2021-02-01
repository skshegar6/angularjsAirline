import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../service/passenger.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {
  fliterValue:any[] = [{'id':'1','name':'Address'},{'id':'2','name':'DOB'},{'id':'3','name':'Passport'}];
  fliter_select:number= 0;
  fullPassengerData:any;
  displayedColumns: string[] =['name','address','dob','seat_no','action'];
  dataSource:any;
  flightId:any;
  constructor(private passengerService: PassengerService, private route:ActivatedRoute) { }

async ngOnInit() {
     //console.log('h')
    this.flightId= this.route.snapshot.paramMap.get('flightId');
    await this.passengerService.getPassangersByFlight(this.flightId).subscribe((data:any)=>{
    console.log(data.passenger)
    this.dataSource = data.passenger;
    //this.passengerService.eventSubject.next(data);
    });
   
  }

}
