import {
  Component,
  Inject,
  OnInit,
  ViewChild,
  ɵɵsetComponentScope,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService } from 'src/app/services/hero.service';
import { DialogTwolistComponent } from 'src/app/shared/dialogtwolist/dialog-twolist.component';

/**
 * @title Table dynamically changing the columns displayed
 */
@Component({
  selector: 'app-table-dynamic-columns-example',
  styleUrls: ['table-dynamic-columns-example.css'],
  templateUrl: 'table-dynamic-columns-example.html',
})
export class TableDynamicColumnsExampleComponent implements OnInit {
  showCols = new FormControl('');

  allColumns: string[] = [];
  displayedColumns: string[] = [];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  users: any[] = [];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort)
  sort!: MatSort;

  dlgData = {
    left: [
      { id: 1, value: 'aaaa (zzz)' },
      { id: 2, value: 'bbbbbbb Priority Insurance Consultants, LLC (yyy)' },
    ],
    right: [
      { id: 6, value: 'hhh Eagles' },
      { id: 8, value: '(22222222unter) Lynn Posey (iiii)' },
      { id: 9, value: '333333333 Alliance Ins (jjj)' },
    ],
  };

  constructor(private service: HeroService, public dialog: MatDialog) {}

  ngOnInit() {
    this.service
      .getXYZ('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (v) => {
          console.log(v);
          this.users = v;
          this.displayedColumns = Object.keys(this.users[0]);

          this.columnsToDisplay = this.displayedColumns.slice();
          this.allColumns = this.displayedColumns.slice();
          //this.displayedColumnsExtra.push('action');
          //this.displayedColumnsAll = this.displayedColumns.concat(this.displayedColumnsExtra);
          this.dataSource = new MatTableDataSource(v);
          this.dataSource.sort = this.sort;

          //
          console.table(this.displayedColumns);
          this.dlgData.left = this.displayedColumns.map((element, index) => ({ id: index, value: element }));
          this.dlgData.right = [];

          console.table(this.dlgData);
          //console.table(newArray);


        },
        error: (e) => console.error(`\tERROR occured: ${JSON.stringify(e)}`),
        complete: () => console.info('complete'),
      });
  }

  listColumn(event: any) {
    console.log(event);
    const cols: string[] = event;
    // console.table(this.displayedColumns);
    console.table(this.columnsToDisplay);
    //this.columnsToDisplay= this.columnsToDisplay.filter(element => !cols.includes(element));
    this.columnsToDisplay = this.allColumns.filter(
      (element) => !cols.includes(element)
    );
    console.log(this.columnsToDisplay);
    //const updatedArray = removeElements(array, 'Value', this.displayedColumns);
    // const updatedArray =this.columnsToDisplay.filter((element) => {
    //   return element !== '';
    // });
  }

  listColumn22(colsToDisplay: any[]) {
    console.log(colsToDisplay);
    //const cols: string[] = event;
    // console.table(this.displayedColumns);
    console.table(this.columnsToDisplay);
    //this.columnsToDisplay= this.columnsToDisplay.filter(element => !cols.includes(element));
    this.columnsToDisplay = colsToDisplay;
  }


  // addColumn() {
  //   const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
  //   this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  // }

  // removeColumn() {
  //   if (this.columnsToDisplay.length) {
  //     this.columnsToDisplay.pop();
  //   }
  // }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap
      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogTwolistComponent, {
      width: '950px',
      data: this.dlgData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      console.log(result);
      if (result.left) {
        let lefts = result.left.map((elm: { id: string; value: string }) => {
          return elm.id + ' - ' + elm.value;
        });
        let rights = result.right.map((elm: { id: string; value: string }) => {
          return elm.id + ' - ' + elm.value;
        });
        console.log('lefts', lefts);
        //alert(JSON.stringify(result));
        //alert(JSON.stringify({ LEFT: lefts, RIGHT: rights }, null, 2));
        rights = result.right.map((elm: { id: string; value: string }) => {
           return elm.value;
        });
        this.listColumn22(rights)
      }
    });
  }
}
