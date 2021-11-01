import { SharedModule } from './../layout/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateDataComponent } from './create-data/create-data.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';


@NgModule({
  declarations: [
    CreateDataComponent,
    CreateDialogComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule
  ]
})
export class CreateModule { }
