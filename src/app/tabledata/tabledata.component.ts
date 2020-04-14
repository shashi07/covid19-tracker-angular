import { Component, OnInit } from '@angular/core';
import {ComparisionObj} from "../interfaces"
import { DataService } from "../data.service"

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  comparisionCols: string[] = ['variable', 'world', 'india', 'maharashtra'];
  stateLevelCols : string[] = ['state', 'cases', 'deaths', 'mortality'];
  ageWiseCols : string[] = ['age_group', 'cases', 'deaths', 'mortality'];
  comparisionData = null;
  stateComparisonData = null;
  ageWiseData= null;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getComparisionObjData();
    this.getStateWiseCompariosnData();
    this.getAgeWiseCompariosnData();

  }

  getComparisionObjData() : void {
    this.dataService.getComparisionObjData().subscribe(data => {this.comparisionData = data});
   }

   getStateWiseCompariosnData() : void {
    this.dataService.getStateWiseCompariosnData().subscribe(data => {this.stateComparisonData = data});
   }

   getAgeWiseCompariosnData() : void {
    this.dataService.getAgeWiseCompariosnData().subscribe(data => {this.ageWiseData = data});
   }

}
