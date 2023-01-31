import {Component, Inject, OnInit, ViewChild, ɵɵsetComponentScope} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HeroService } from 'src/app/services/hero.service';

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
  users: any[] =[];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private service: HeroService) {}

  ngOnInit() {
    this.service
      .getXYZ('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (v) => {console.log(v);
          this.users = v;
          this.displayedColumns = Object.keys(this.users[0]);

          this.columnsToDisplay = this.displayedColumns.slice();
          this.allColumns = this.displayedColumns.slice();
          //this.displayedColumnsExtra.push('action');
          //this.displayedColumnsAll = this.displayedColumns.concat(this.displayedColumnsExtra);
          this.dataSource = new MatTableDataSource(v);
          this.dataSource.sort = this.sort;
        },
        error: (e) => console.error(`\tERROR occured: ${JSON.stringify(e)}`),
        complete: () => console.info('complete'),
      });
  }

  listColumn(event: any) {
    console.log(event)
    const cols: string[] = event;
    // console.table(this.displayedColumns);
    console.table(this.columnsToDisplay);
    //this.columnsToDisplay= this.columnsToDisplay.filter(element => !cols.includes(element));
    this.columnsToDisplay= this.allColumns.filter(element => !cols.includes(element));
    //console.log(ccc)
    //const updatedArray = removeElements(array, 'Value', this.displayedColumns);
    // const updatedArray =this.columnsToDisplay.filter((element) => {
    //   return element !== '';
    // });

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
}
