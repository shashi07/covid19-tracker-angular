import { Injectable } from '@angular/core';
import { BarChartObj, CountryLevelObj } from './interfaces';
import { StateLevelData } from "./mock-data";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private getStateLevelDataUrl = 'http://localhost:8000/api/getstateLevelData/';
  private getCountryLevelDataUrl = 'http://localhost:8000/api/getCountryLevelData/?country=India'; 

  constructor(private http: HttpClient) { }

  getStateLevelData() : Observable<BarChartObj[]>  {
    //return of(StateLevelData)
    return this.http.get<BarChartObj[]>(this.getStateLevelDataUrl)
  }

  getCountryLevelData() : Observable<CountryLevelObj[]>  {
    //return of(StateLevelData)
    return this.http.get<CountryLevelObj[]>(this.getCountryLevelDataUrl)
  }
}
