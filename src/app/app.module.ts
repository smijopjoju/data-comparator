import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { InputCompareDataComponent } from './input-compare-data/input-compare-data.component';
import { DataCompareResultComponent } from './data-compare-result/data-compare-result.component';
import { HighchartsChartComponent } from "highcharts-angular";
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InputCompareDataComponent,
    DataCompareResultComponent,
    HighchartsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
