import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { InputCompareDataComponent } from "./input-compare-data/input-compare-data.component";
import { DataCompareResultComponent } from "./data-compare-result/data-compare-result.component";

const routes: Routes = [
  {path:"", component:InputCompareDataComponent},
  {path:"result", component:DataCompareResultComponent}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
