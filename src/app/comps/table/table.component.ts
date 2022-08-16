import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../../comps/dialog-box/dialog-box.component';
import { TableDataSource, TableItem } from './table-datasource';
import { Rxjs101Service } from 'src/app/services/rxjs101.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableItem>;
  dataSource: TableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'action'];

  constructor(public dialog: MatDialog, private testRxjs: Rxjs101Service) {
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(action: any, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'api') {
        this.doItRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: any) {
    var d = new Date();
    this.dataSource.data.push({
      id: d.getTime(),
      name: row_obj.name,
    });
    this.table.renderRows();
  }

  doItRowData(row_obj: any) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
        console.log(`ZZZZZZZZZZZ ${JSON.stringify(row_obj)}`);
        this.testService(row_obj.name);
      }
      return true;
    });
  }

  updateRowData(row_obj: any) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      if (value.id == row_obj.id) {
        value.name = row_obj.name;
      }
      return true;
    });
  }

  deleteRowData(row_obj: any) {
    this.dataSource.data = this.dataSource.data.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }

  openDialog00(one: string, two: any) {
    alert(one + ': ' + JSON.stringify(two));
  }

  testService(name: string) {

    this.testRxjs.testService(name);

    //console.log(`testService ${name}`);

//     switch (name) {
//       case 'testSwitched':
//         console.log('AAAAAAAAAAAAAAAAAAAAAAAAA');
//         this.testRxjs.testSwitched(name);
//         break;

//       default:

//         break;
//     }
  }
}
