import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ItemStatus } from 'src/app/models/ItemStatus.model';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  public gobFom: FormGroup = new FormGroup({});
  public gobStates: ItemStatus[] = [];

  constructor(public ref: DynamicDialogRef, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getStates();
  }

  createForm(): void {
    this.gobFom = this.fb.group({
      expirationDate: ['', Validators.required],
      status: ['', Validators.required],
      desc: ['']
    });
  }

  onAccept() {
    this.ref.close({status: 'ok'});
  }

  onCancel() {
    this.ref.close();
  }

  getStates(): void {
    this.gobStates.push(
      {statusCode: '1', statusDesc: 'ok'},
      {statusCode: '2', statusDesc: 'test-pending'},
      {statusCode: '3', statusDesc: 'damaged'},
      {statusCode: '3', statusDesc: 'discharged'},
    );
  }

}
