import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { seatsLayout } from '../../app.component';
import {FormControl} from '@angular/forms';
import {TooltipPosition, MatTooltip} from '@angular/material/tooltip';


class seatsLayout{
  totalRows: Number=0;
  seatsPerRow: Number=0;
  seatNaming: String='';
  booked:String[]=[];
}

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() seatsLayout:seatsLayout;
  @Output() confirm= new EventEmitter();
  @Input('matTooltip') message: string="jj";
  rows = new Array();
  lastBooked:any=null;

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }
  
  
  
  ngOnInit() {
  
    var rows=new Array()
    var seatsInARow= new Array()
    var seatChar;
    if (this.seatsLayout != undefined && this.seatsLayout.hasOwnProperty('totalRows')){
      if(this.seatsLayout.seatNaming='rowType'){
        for(let row = 0 ; row<this.seatsLayout.totalRows; row++){
          for(let seats = 0; seats<this.seatsLayout.seatsPerRow; seats++){
            seatChar = String.fromCharCode(65 + seats)
            seatsInARow.push((row + 1).toString() + seatChar);
          }
          rows.push(seatsInARow);
          seatsInARow = new Array();
        }
      }
    }
    this.rows = rows
  }
  
  done(){
    //this.confirm.emit(this.seatsLayout.booked)
    this.confirm.emit(this.lastBooked)
  }

  seatAction(seat){
    if(this.seatsLayout.booked.indexOf(seat)>=0){
      this.seatsLayout.booked = this.seatsLayout.booked.filter(bookedSeat=>{
        return bookedSeat!=seat;
      })
      this.lastBooked = null;
    }else{
      this.seatsLayout.booked.push(seat);
      this.lastBooked = seat;
    }
  }
}
