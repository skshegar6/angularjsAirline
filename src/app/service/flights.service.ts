import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FilghtServerJsonExchangeFormat } from './payloads/filght-server-json-exchange-format';
import { Subject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  eventSubject = new Subject<object>();
  constructor(private http:HttpClient) { }

  getFlightsJson(): Observable<FilghtServerJsonExchangeFormat[]> {
    return this.http.get<FilghtServerJsonExchangeFormat[]>(`http://localhost:8080/flights_overall_data`);
    
   }
}
