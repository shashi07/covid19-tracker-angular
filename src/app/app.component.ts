import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service"
import {CountryLevelObj} from "./interfaces"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  constructor(private dataService: DataService) {}

  title = 'covid19-app';

  // options for the chart
  //view: any[] = [600, 400];
  view: any[] = null ;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'State';
  showYAxisLabel = true;
  yAxisLabel = 'Confirmed Cases';
  timeline = true;
  single: any[] = []
  countryMedian : any[] = []
  growthFactor : any[] =[]
  ngOnInit() {
      this.getStateLevelData()
      this.getCountryLevelData()
  }


getStateLevelData() : void {
 this.dataService.getStateLevelData().subscribe(data => {this.single = data});
}

getCountryLevelData() : void {
  this.dataService.getCountryLevelData().subscribe(data => {
    let t : any[] = []
    let growthT = []
    let growthX = {name : "Growth Factor", series :[]}
    data.forEach( function(obj){
      let temp = {}
      temp["name"] = obj.date
      temp["value"] = obj.median
      t.push(temp)
      growthX.series.push({name:obj.date,value:obj.growth_factor})

    })
    growthT.push(growthX)
    this.growthFactor = growthT
    this.countryMedian = t
  });
 }

}
