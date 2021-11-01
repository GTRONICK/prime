import { CreateDialogComponent } from './../create-dialog/create-dialog.component';
import { UtilsService } from './../../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Message } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {

  lastItems: {id: number, type: number, desc: string, status: string}[] = [
    {id: 1731, type: 0, desc: 'Bag', status: 'test-pending'},
    {id: 1732, type: 2, desc: 'Adapter', status: 'ok'},
    {id: 1733, type: 5, desc: 'Cable', status: 'ok'},
    {id: 1734, type: 0, desc: 'Bag', status: 'damaged'},
    {id: 1735, type: 3, desc: 'Mouse', status: 'discharged'},
    {id: 1736, type: 7, desc: 'Keyboard', status: 'test-pending'},
    {id: 1737, type: 2, desc: 'Adapter', status: 'ok'},
    {id: 1738, type: 3, desc: 'Mouse', status: 'ok'},
    {id: 1739, type: 1, desc: 'Battery', status: 'discharged'},
    {id: 1740, type: 0, desc: 'Bag', status: 'ok'},
    {id: 1741, type: 0, desc: 'Bag', status: 'damaged'},
  ];

  msgs: Message[] = [];

  constructor(
    public utilsService: UtilsService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public dialogService: DialogService
  ) { }

  ngOnInit(): void {
  }

  openEditDialog(aiItemId: number): void {
    const ref = this.dialogService.open(CreateDialogComponent, {
      header: 'Edit item',
      width: '70%'
    });

    ref.onClose.subscribe( data => {
      console.log({data});
    })
  }

  openDeleteConfirmation(aiItemId: number): void {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected items?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.lastItems = this.lastItems.filter(val => val.id !== aiItemId);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Items Deleted', life: 3000});
      }
    });
  }
}
