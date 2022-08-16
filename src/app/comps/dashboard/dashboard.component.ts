import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { FormControl, FormGroup } from '@angular/forms';
import * as gDummy from '../../dummydata/dummys';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  formSection = new FormGroup({
    //firstName: new FormControl(''),

    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
    }),
  });

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'app-accordian', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'app-address', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'app-accordian', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'app-address', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
  ngOnInit(): void {
    this.formSection = new FormGroup({
      // firstName: new FormControl(''),

      // stackDetails: new FormGroup({
      //   stack: new FormControl(''),
      //   experience: new FormControl(''),
      // }),

      address: new FormGroup({
        company: new FormControl(''),
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        address: new FormControl(''),
        address2: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        postalCode: new FormControl(''),
        shipping: new FormControl(''),
      }),
    });
    this.patch('address', gDummy.mockData.address);
  }

  patch(section: string, data: any) {
    console.log('patch(section:string, data: any)');
    const dummyAddress = data;
    this.formSection.patchValue(dummyAddress);
  }
}
