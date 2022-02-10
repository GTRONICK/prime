import { SharedModule } from '../../layout/shared/shared.module';
import { SessionRoutingModule } from './session-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    SessionRoutingModule,
    SharedModule
  ]
})
export class SessionModule { }
