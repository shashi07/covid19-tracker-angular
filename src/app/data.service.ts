import { Injectable } from '@angular/core';
import { BarChartObj, CountryLevelObj, ConsolidateDataObj} from './interfaces';
import { StateLevelData } from "./mock-data";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected apiServer = '';
  private getStateLevelDataUrl = this.apiServer +'/api/getstateLevelData/';
  private getCountryLevelDataUrl = this.apiServer +'/api/getCountryLevelData/?country=India';
  private getDistrictLevelDataUrl = this.apiServer + '/api/getDistrictLevelData/?state=Maharashtra';
  private getIndiaConsolidatedDataUrl = this.apiServer + '/api/getConsolidatedData/?view=India';

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

  
}
