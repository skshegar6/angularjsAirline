import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilghtServerJsonExchangeFormat } from './payloads/filght-server-json-exchange-format';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  eventSubject = new Subject<object>();
  constructor( private http:HttpClient) { }

  getPassangersByFlight(flightId:number):Observable<FilghtServerJsonExchangeFormat[]>{
    return this.http.get<FilghtServerJsonExchangeFormat[]>(`http://localhost:8080/passengersByFlight/`+flightId);
  }
}
