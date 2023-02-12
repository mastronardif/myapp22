import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface UsersData {
  name: string;
  id: number;
}

@Component({
  selector: 'app-dialog-content-example',
  templateUrl: './dialog-content-example.component.html',
  //  `
  //   <h1 mat-dialog-title>Dialog title</h1>
  //   <div mat-dialog-content>{{data.message}}</div>
  //   <div mat-dialog-actions>
  //     <!-- <button mat-button (click)="onNoClick()">No Thanks</button>
  //     <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button> -->
  //   </div>
  // `
})
export class DialogContentExampleComponent {

  //action: string;
  local_data: any;

  constructor(public dialogRef: MatDialogRef<DialogContentExampleComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', data);
    this.local_data = {...data};
    //this.action = this.local_data.action;
  }
}
