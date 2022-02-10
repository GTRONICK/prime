import { SharedModule } from '../../layout/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { QueryDataComponent } from './query-data/query-data.component';


@NgModule({
  declarations: [
    QueryDataComponent
  ],
  imports: [
    CommonModule,
    QueryRoutingModule,
    SharedModule
  ]
})
export class QueryModule { }
