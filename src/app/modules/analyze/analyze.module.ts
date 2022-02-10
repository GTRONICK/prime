import { SharedModule } from '../../layout/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzeRoutingModule } from './analyze-routing.module';
import { AnalyzeComponent } from './analyze/analyze.component';


@NgModule({
  declarations: [
    AnalyzeComponent
  ],
  imports: [
    CommonModule,
    AnalyzeRoutingModule,
    SharedModule
  ]
})
export class AnalyzeModule { }
