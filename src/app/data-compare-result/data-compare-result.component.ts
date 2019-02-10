import { Component, OnInit } from '@angular/core';
import * as highchart from 'highcharts';

@Component({
  selector: 'app-data-compare-result',
  templateUrl: './data-compare-result.component.html',
  styleUrls: ['./data-compare-result.component.css']
})
export class DataCompareResultComponent implements OnInit {

  Highchart = highchart;
  chartOptions = {
    series: [{
      data: [1, 2, 3]
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
