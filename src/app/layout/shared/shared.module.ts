import { CreateDialogComponent } from '../../modules/create/create-dialog/create-dialog.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputNumberModule } from 'primeng/inputnumber';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { ScrollTopModule } from 'primeng/scrolltop';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

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
    BadgeModule,
    CardModule,
    PanelModule,
    InputNumberModule,
    ChartModule,
    TableModule,
    MenuModule,
    ScrollTopModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule
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
    BadgeModule,
    CardModule,
    PanelModule,
    InputNumberModule,
    ChartModule,
    TableModule,
    MenuModule,
    ScrollTopModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    DynamicDialogModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputTextModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService
  ],
  entryComponents: [
    CreateDialogComponent
  ]
})
export class SharedModule { }
