import { Injectable } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data1: object = {};
  data2: object = {};
  constructor() { }

  addData(data1:object,data2:object): void {
    this.data1 = data1;
    this.data2 = data2;
  }

  getData1():object {
    return this.data1;
  }

  getData2():object {
    return this.data2;
  }

  convertStrToObject(dataStr:string): object {
    if(dataStr != null && dataStr.length > 0) {
      return JSON.parse(dataStr);
    }

    return {};
  }

  validateDataFormat(dataStr:string): boolean {
    if(dataStr != null && dataStr.length > 0) {
      let data = this.convertStrToObject(dataStr);
      if( data != null && data["x"] != null && data["y"] != null) {
          return true;
      }
    }
    return false;
  }

  getPreparedDataSet1(): object {

    let dataSet1 = [];

    if(this.data1['x'] != null && this.data1['y'] != null) {

        let xAxisValues: Array<Number> = this.data1['x'];
        let yAxisValues: Array<Number> = this.data1['y'];

        for(let index = 0; index < xAxisValues.length; index ++) {
          dataSet1.push([xAxisValues[index],yAxisValues[index]]);
        }
    }

    return dataSet1;
  }

  getPreparedDataSet2(): object {

    let dataSet2 = [];

    if(this.data2['x'] != null && this.data2['y'] != null) {

        let xAxisValues: Array<Number> = this.data2['x'];
        let yAxisValues: Array<Number> = this.data2['y'];

        for(let index = 0; index < xAxisValues.length; index ++) {
          dataSet2.push([xAxisValues[index],yAxisValues[index]]);
        }
    }

    return dataSet2;
  }

}