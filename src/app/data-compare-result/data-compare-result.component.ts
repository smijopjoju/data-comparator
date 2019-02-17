import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DataService } from "../data.service";

@Component({
  selector: 'app-data-compare-result',
  templateUrl: './data-compare-result.component.html',
  styleUrls: ['./data-compare-result.component.css']
})
export class DataCompareResultComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {
    series: []
  };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    
    let data1 = this.dataService.getPreparedDataSet1();
    let data2 = this.dataService.getPreparedDataSet2();
    let dataObj1 = {};

    let dataObj2: object = {};
    
    dataObj1["data"] = data1;
    dataObj2["data"] = data2;
    console.log("Data1",JSON.stringify(dataObj1));
    console.log("Data2",JSON.stringify(dataObj2));
    this.chartOptions.series.push(dataObj1,dataObj2);
  }

}
