import { Injectable } from '@angular/core';
import { BarChartObj, CountryLevelObj, ConsolidateDataObj, ComparisionObj, StateWiseComparisionObj, AgeWiseComparisionObj} from './interfaces';
import { StateLevelData } from "./mock-data";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected apiServer = 'http://localhost:8000';
  private getStateLevelDataUrl = this.apiServer +'/api/getstateLevelData/';
  private getCountryLevelDataUrl = this.apiServer +'/api/getCountryLevelData/?country=India';
  private getDistrictLevelDataUrl = this.apiServer + '/api/getDistrictLevelData/?state=Maharashtra';
  private getIndiaConsolidatedDataUrl = this.apiServer + '/api/getConsolidatedData/?view=India';
  private getComparisionDataUrl = this.apiServer + '/api/getComparisionData/';
  private getStateWiseCompariosnDataUrl = this.apiServer + '/api/getStateWiseComparisionData/';
  private getAgeWiseDataUrl = this.apiServer + '/api/getAgeWiseData/';

  constructor(private http: HttpClient) { }

  getStateLevelData() : Observable<BarChartObj[]>  {
    //return of(StateLevelData)
    return this.http.get<BarChartObj[]>(this.getStateLevelDataUrl)
  }

  getCountryLevelData() : Observable<CountryLevelObj[]>  {
    //return of(StateLevelData)
    return this.http.get<CountryLevelObj[]>(this.getCountryLevelDataUrl)
  }

  getDistrictLevelData() : Observable<BarChartObj[]>  {
    //return of(StateLevelData)
    return this.http.get<BarChartObj[]>(this.getDistrictLevelDataUrl)
  }


  getIndiaConsolidatedData() : Observable<ConsolidateDataObj>  {
    //return of(StateLevelData)
    return this.http.get<ConsolidateDataObj>(this.getIndiaConsolidatedDataUrl)
  }


  getComparisionObjData() : Observable<ComparisionObj[]>  {
    //return of(StateLevelData)
    return this.http.get<ComparisionObj[]>(this.getComparisionDataUrl)
  }
  
  getStateWiseCompariosnData() : Observable<StateWiseComparisionObj[]>  {
    //return of(StateLevelData)
    return this.http.get<StateWiseComparisionObj[]>(this.getStateWiseCompariosnDataUrl)
  }

  getAgeWiseCompariosnData() : Observable<AgeWiseComparisionObj[]>  {
    //return of(StateLevelData)
    return this.http.get<AgeWiseComparisionObj[]>(this.getAgeWiseDataUrl)
  }

}
