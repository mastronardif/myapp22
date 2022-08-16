import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
//import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

import { merge } from 'rxjs';
import { LoadingService } from 'src/app/loading.service';
import { HeroService } from 'src/app/services/hero.service';

export interface User {
  name: string;
  email: string;
  phone: string;
  website: string;
  id: number;
  username: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-table-from-url',
  templateUrl: 'table-from-url.component.html',
  styles: [
    `
      table {
        width: 100%;
      }

      mat-icon {
        cursor: pointer;
      }

      th.mat-sort-header-sorted {
        color: black;
      }
    `,
  ],
})
export class TableFromUrlComponent implements OnInit {
  displayedColumns: string[] = []; //['name', 'email', 'phone', 'website', 'action'];
  displayedColumnsExtra: string[] = ['edit', 'bobo'];
  //displayedColumnsAll: string[] = [];
  dataSource!: MatTableDataSource<any>;
  //user;

  users: any[] =[]; //| undefined;
  //colNames:string[] = [];

  @ViewChild(MatSort)
  sort!: MatSort;

  //loading$ = this.loader.loading$;

  constructor(private service: HeroService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service
      .getXYZ('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (v) => {console.log(v);
          this.users = v;
          this.displayedColumns = Object.keys(this.users[0]);
          //this.displayedColumnsExtra.push('action');
          //this.displayedColumnsAll = this.displayedColumns.concat(this.displayedColumnsExtra);
          this.dataSource = new MatTableDataSource(v);
          this.dataSource.sort = this.sort;
        },
        error: (e) => console.error(`\tERROR occured: ${JSON.stringify(e)}`),
        complete: () => console.info('complete'),
        //console.log(this.users);
      });
    // (users: User[]) => {
    // this.users = users;
    // this.dataSource = new MatTableDataSource(users);
    // this.dataSource.sort = this.sort;
    //});
  }

  // addItem() {
  //   this.users.push({
  //     id: 1,
  //     name: "Leanne Graham",
  //     username: "Bret",
  //     email: "Sincere@april.biz",
  //     address: {
  //       street: "Kulas Light",
  //       suite: "Apt. 556",
  //       city: "Gwenborough",
  //       zipcode: "92998-3874",
  //       geo: {
  //         lat: "-37.3159",
  //         lng: "81.1496"
  //       }
  //     },
  //     phone: "1-770-736-8031 x56442",
  //     website: "hildegard.org",
  //     company: {
  //       name: "Romaguera-Crona",
  //       catchPhrase: "Multi-layered client-server neural-net",
  //       bs: "harness real-time e-markets"
  //     }
  //   });
  //   this.dataSource = new MatTableDataSource(this.users);
  // }

   editUser(action: string, user: any) {
     // switch on action
    console.log(JSON.stringify(action));
    switch (action) {
      case 'edit':
        console.log(JSON.stringify(user));
        alert(JSON.stringify(user));
        break;

      default:
        console.log(`Sorry, we are out of ${action}.`);
        alert(`Sorry, we are out of ${action}.`);
    }
    //  console.log(JSON.stringify(user));
    //  alert(JSON.stringify(user));
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: user,
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     this.user = user;
  //   });
   }

  getZZZ(fldIndex: number): string {
    if (this.users && this.users[0]) {


    //Object.keys(this.users[0])[0]
    return Object.keys(this.users[0])[0];
  }
  return '';
  }
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog.html',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
