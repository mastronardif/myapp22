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

  displayedColumns: string[] = [];//['name', 'weight', 'symbol', 'position'];
  displayedColumnsExtra: string[] = ['edit', 'bobo'];
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


  listColumn(event: any) {
    console.log(event)
    // console.table(this.displayedColumns);
    // console.table(this.columnsToDisplay);
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

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
