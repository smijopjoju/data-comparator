import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-input-compare-data',
  templateUrl: './input-compare-data.component.html',
  styleUrls: ['./input-compare-data.component.css']
})
export class InputCompareDataComponent implements OnInit {

  data1: string = '';
  data2: string = '';

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  compareData():void {
    if( this.dataService.validateDataFormat(this.data1) && this.dataService.validateDataFormat(this.data2) ) {
        this.dataService.addData(this.dataService.convertStrToObject(this.data1),
        this.dataService.convertStrToObject(this.data2));
        console.log(this.dataService.convertStrToObject(this.data1));
        this.router.navigateByUrl("/results");
    }
  }

}
