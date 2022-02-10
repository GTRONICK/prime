import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: LoginComponent }
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( routes )
    ]
  })
export class SessionRoutingModule {}
