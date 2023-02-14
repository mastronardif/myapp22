import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


// export interface UsersData {
//   name: string;
//   id: number;
// }

// export interface UserModel {
//   id: number;
//   value: string;
// }

@Component({
  selector: 'app-dialog-content-twolist',
  templateUrl: './dialog-content-twolist.component.html',
  styleUrls: ['./dialog-content-twolist.component.css'],
})
export class DialogContentTwolistComponent {
  public activeItems: any[] = [];
  local_data: any;
  public gData = {
    left: [
      { id: 1, value: '19November (zzzzzzzzzz)' },
      { id: 2, value: '1st Priority Insurance Consultants, LLC (2358)' },
    ],
    right: [
      { id: 6, value: 'Go Eagles' },
      { id: 8, value: '(Hunter) Lynn Posey (2895)' },
      { id: 9, value: '1st Alliance Ins (2335)' },
    ],
  };

  // public agentInView = [
  //   { id: 1, value: '19November (191119)' },
  //   { id: 2, value: '1st Priority Insurance Consultants, LLC (2358)' },
  //   { id: 3, value: '4 State Insurance Agency, Inc. (11107)' },
  //   { id: 4, value: 'A Plus Insurance (2225)' },
  //   { id: 5, value: 'A Plus Insurance Agency, Inc. (3001)' },
  //   { id: 6, value: 'A. C. HUEY AGENCY (3592)' },
  //   { id: 7, value: 'A.J. Bartol (6010)' },
  // ];

  constructor(
    public dialogRef: MatDialogRef<DialogContentTwolistComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    //let data22 =   {...this.dlgData};
    this.gData=   {...data}; //data;
    console.log('constructor data', data);
    //this.local_data = { ...data };

    //this.action = this.local_data.action;
  }

  public moveToTheRight(): void {
    this.move('right', 'left');

    //this.move('agentInView', 'agentNotinView');
  }

  public moveToTheLeft(): void {
    this.move('left', 'right');
    //this.move('agentNotinView', 'agentInView');
  }

  public moveToXYZ(event: any) {
    switch (event.target.id) {
      case 'Left': {
        this.moveToTheLeft();
        //this.move('agentNotinView', 'agentInView');
        break;
      }
      case 'Right': {
        this.moveToTheRight();
        break;
      }
      default: {
        //statements;
        break;
      }
    }
    console.log('moveToXYZ', event, event.target.id);
  }
  public move(from: string, to: string): void {
    //alert(from + '' + to);
    console.log('from', from);
    // let from00 =
    //   from === 'agentNotinView' ? this.agentNotinView : this.agentInView;
    // const to00 =
    //   to === 'agentNotinView' ? this.agentNotinView : this.agentInView;
    const wtf = from === 'left' ? 'left' : 'right';
    const wtfTo = to === 'right' ? 'right' : 'left';
    let aaa = this.gData[wtf];
    this.gData[wtf] = this.gData[wtf].filter((item: any, i: number) => {
      if (this.isInActiveItems(item)) {
        this.gData[wtfTo].push(item);
        return false;
      } else {
        return true;
      }
    });

    // if needed
    // sort if needed
    this.gData[wtfTo].sort((a, b) => (a.id > b.id ? 1 : -1));

    // clean active items after action
    this.activeItems.length = 0;
    console.table(this.gData.left);
    console.table(this.gData.right);
  }

  public toggleActiveItem(eventItem: any): void {
    console.log(eventItem);
    if (this.activeItems.find((item) => item === eventItem)) {
      this.activeItems = this.activeItems.filter((item) => item !== eventItem);
    } else {
      this.activeItems.push(eventItem);
    }
  }

  public isInActiveItems(eventItem: any): boolean {
    return !!this.activeItems.find((item) => item === eventItem);
  }

  actionButtons = [
    { id: 'elect All', label: 'Select All' },
    { id: 'Left', label: 'Left to Right' },    { id: 'Right', label: 'Right to Left' },
    { id: 'Remove All', label: 'Remove All' },
  ];
}
