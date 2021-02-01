import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { FlightsService } from '../service/flights.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-staff-dash-board',
  templateUrl: './staff-dash-board.component.html',
  styleUrls: ['./staff-dash-board.component.css']
})

export class StaffDashBoardComponent implements OnInit {

  @Output() tableValueChaged  = new EventEmitter();
  flightsData:any=[]
  flightTimes:any[]= [];
  selectTimes:object={'start_time':'','end_time':''};  
  startTime:string='0:00:00'; 
  endTime:string='23:00:00';
  matchedFlights:any=[];
  selectedFightFullData:any=[];
  flightSelect:any;
  selectedFlightInDropDown='';

  constructor(private flightservice11:FlightsService,private testevent: LoginService) { }

  FliterFighths(){
    if(this.startTime !==  '' &&   this.endTime !== ''){
        let flightsArray = this.flightsData.filter((flight:any) =>{
            if(this.checkInBetweenTime(this.startTime+':00:00',this.endTime+':00:00',flight.start_Time)) return flight;
        })
        if(flightsArray.length > 0){
          this.matchedFlights = flightsArray;  
        }
    }else{
      alert("Choose Both Start and End Time")
    }
    
  }

  checkInBetweenTime(startTime:any,endTime:any,betweenTime:any){
      let currentDate = new Date();   
      let startDate = new Date(currentDate.getTime());
      startDate.setHours(startTime.split(":")[0]);
      startDate.setMinutes(startTime.split(":")[1]);
      startDate.setSeconds(startTime.split(":")[2]);
      let endDate = new Date(currentDate.getTime());
      endDate.setHours(endTime.split(":")[0]);
      endDate.setMinutes(endTime.split(":")[1]);
      endDate.setSeconds(endTime.split(":")[2]);
      let InbetweenTime = new Date(currentDate.getTime());
      InbetweenTime.setHours(betweenTime.split(":")[0]);
      InbetweenTime.setMinutes(betweenTime.split(":")[1]);
      InbetweenTime.setSeconds(betweenTime.split(":")[2]);
      if(startDate < InbetweenTime && endDate > InbetweenTime){
          return true;
      }else{
          return false;
      }        
  }

  selectedFight(){
    
    this.selectedFightFullData =[]
    this.flightsData.filter((flight:any)=>{
          if(flight.id == this.selectedFlightInDropDown){
            this.selectedFightFullData.push(flight) 
          }
    });
    this.testevent.eventSubject.next(this.selectedFightFullData)
    }

  selectedFlight(){
    return this.selectedFightFullData;
  }
 
  ngOnInit(): void {
    for(let i=0;i<=23;i++){
        this.flightTimes.push({'id':i+':00:00','value':i+':00:00'});
    }
    this.flightservice11.getFlightsJson().subscribe((data: any)=>{
      this.flightsData =data;
    }) 
    this.startTime='0:00:00'; 
    this.endTime='23:00:00';
    this.selectedFight()

  }
}
