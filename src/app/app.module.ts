import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputCompareDataComponent } from './input-compare-data/input-compare-data.component';
import { DataCompareResultComponent } from './data-compare-result/data-compare-result.component';
import { HighchartsChartModule } from "highcharts-angular";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputCompareDataComponent,
    DataCompareResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
