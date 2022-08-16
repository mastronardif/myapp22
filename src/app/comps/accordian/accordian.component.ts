import { Component, OnInit } from '@angular/core';
import * as gDummy from '../../dummydata/dummys';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent implements OnInit {
  items = ['Item 1', 'app-wtf', 'Address', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;

  formSection = new FormGroup({
    //firstName: new FormControl(''),

    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
    }),
  });

  constructor(private fb: FormBuilder) {
    console.log(`accordian.component constructor()`);
  }

  ngOnInit(): void {
    console.log(`accordian.component ngOnInit()`);

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

  callingFunction() {
    console.log(this.formSection.value);
  }

  submitAccordian() {
    console.log(this);
  }

  patch(section: string, data: any) {
    console.log('patch(section:string, data: any)');
    const dummyAddress = data;
    this.formSection.patchValue(dummyAddress);
  }
}
