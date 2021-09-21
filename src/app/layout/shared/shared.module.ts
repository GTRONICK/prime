import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PasswordModule,
    ButtonModule,
    FormsModule,
    TooltipModule,
    AvatarModule,
    BadgeModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    FooterComponent,
    PasswordModule,
    ButtonModule,
    FormsModule,
    TooltipModule,
    AvatarModule,
    BadgeModule
  ]
})
export class SharedModule { }
