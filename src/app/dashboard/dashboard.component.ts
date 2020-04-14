import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service"
import {ConsolidateDataObj} from "../interfaces"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService: DataService) {}

  title = 'covid19-app';

  // options for the chart
  //view: any[] = [600, 400];
  view: any[] = null ;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showLegendAW = true;
  showXAxisLabel = true;
  xAxisLabel = 'State';
  showYAxisLabel = true;
  yAxisLabel = 'Confirmed Cases';
  timeline = true;
  single: any[] = []
  mhDistricts : any[] = []
  countryMedian : any[] = []
  growthFactor : any[] =[]
  consolidatedData : ConsolidateDataObj = null;
  isLoaded : boolean = false
  ageWiseMH : any[] = []
  color =[
    {
      name: "No of Patients",
      value: '#0000ff'
    },
    {
      name: "Deaths",
      value: '#ff0000'
    }
];

  ngOnInit() {
      this.getIndiaConsolidatedData()
      this.getStateLevelData()
      this.getCountryLevelData()
      this.getDistrictLevelData()
      this.getAgeWiseData()
  }


getStateLevelData() : void {
 this.dataService.getStateLevelData().subscribe(data => {this.single = data});
}

getDistrictLevelData() : void {
  this.dataService.getDistrictLevelData().subscribe(data => {this.mhDistricts = data});
 }

getIndiaConsolidatedData() : void {
  this.dataService.getIndiaConsolidatedData().subscribe(data => {
    this.consolidatedData = data
    this.isLoaded = true
  });
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


 getAgeWiseData() : void {
  this.dataService.getAgeWiseCompariosnData().subscribe(data => {
    let t : any[] = []
    data.forEach( function(obj){
      let temp = {}
      temp["name"] = obj.age_group
      temp["series"] = []
      temp["series"].push({name:"No of Patients", value:obj.cases})
      temp["series"].push({name:"Deaths", value:obj.deaths})
      t.push(temp)
    })
    this.ageWiseMH = t
  
  });


 }

}
