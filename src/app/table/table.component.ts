import { EventEmitter,Component, OnInit,Input, OnChanges } from '@angular/core';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {
  @Input() tableValueChaged:any;
  @Input() flightchange:any;
  displayedColumns: string[] =['id','name','from_place','to_place','start_Time','action'];
  dataSource:any;

 
  constructor(private loginService: LoginService) { }

  ngOnChanges() {
    this.loginService.eventSubject.subscribe((data:any)=>{
      this.dataSource = data
    })
  }

}
