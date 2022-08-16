import { Component, OnInit } from '@angular/core';
import { mockOrgdata } from 'src/app/dummydata/orgdata';
//import * as gDummy from '../../dummydata/dummys';
//https://typeofnan.dev/an-easy-way-to-build-a-tree-with-object-references/

@Component({
  selector: 'app-myorgchart',
  templateUrl: './myorgchart.component.html',
  styleUrls: ['./myorgchart.component.css'],
})
export class MyorgchartComponent implements OnInit {
  org22: any;
  root: any;
  orgData = mockOrgdata;
  // orgData11: OrgData= {
  //   name: "Iron Man",
  //   type: 'CEO',
  //   children: [
  //       {
  //           name: "Captain America",
  //           type: 'VP',
  //           children: [
  //               {
  //                   name: "Hawkeye",
  //                   type: 'manager',
  //                   children: []
  //               },
  //               {
  //                   name: "Antman",
  //                   type: 'Manager',
  //                   children: []
  //               }
  //           ]
  //       },
  //       {
  //           name: "Black Widow",
  //           type: 'VP',
  //           children: [
  //               {
  //                   name: "Hulk",
  //                   type: 'manager',
  //                   children: [
  //                       {
  //                           name: "Spiderman",
  //                           type: 'Intern',
  //                           children: []
  //                       }
  //                   ]
  //               },
  //               {
  //                   name: "Thor",
  //                   type: 'Manager',
  //                   children: [
  //                       {
  //                           name: "Loki",
  //                           type: 'Team Lead',
  //                           children: []
  //                       }
  //                   ]
  //               }
  //           ]
  //       }
  //   ]
  // };

  constructor() {}

  ngOnInit(): void {
    console.log('MyorgchartComponent ngOnInit()');
    this.myroot();
  }

  //
  // TODO: move to a module
  myroot() {
    const data = [
      {  type: 'CEO', name: "Hawkeye1",children: [], id: 56, parentId: 62 },
      {  type: 'CEO', name: "Hawkeye2",children: [], id: 81, parentId: 80 },
      {  type: 'CEO', name: "Hawkeye3",children: [], id: 74, parentId: null },
      {  type: 'CEO', name: "Hawkeye4",children: [], id: 76, parentId: 80 },
      {  type: 'CEO', name: "Hawkeye5",children: [], id: 63, parentId: 62 },
      {  type: 'CEO', name: "Hawkeye6",children: [], id: 80, parentId: 86 },
      {  type: 'CEO', name: "Hawkeye7",children: [], id: 87, parentId: 86 },
      {  type: 'CEO', name: "Hawkeye8",children: [], id: 62, parentId: 74 },
      {  type: 'CEO', name: "Hawkeye9",children: [], id: 86, parentId: 74 },
    ];

    // const idMapping = data.reduce((acc, el, i) => {
    //   acc[el.id] = i;
    //   return acc;
    // }, {});
    // const idMapping = {
    //   56: 0,
    //   62: 7,
    //   63: 4,
    //   74: 2,
    //   76: 3,
    //   80: 5,
    //   81: 1,
    //   86: 8,
    //   87: 6,
    // };

    const idMapping = data.reduce((acc: { [k: string]: any }, el, i) => {
      //var obj: { [k: string]: any } = {};
      acc[el.id] = i;
      return acc;
    }, {});

    //console.log(idMapping)
    //let root;
    data.forEach((el) => {
      // Handle the root element
      if (el.parentId === null) {
        this.root = el;
        return;
      }
      // Use our mapping to locate the parent element in our data array
      var obj: { [children: string]: any } = data[idMapping[el.parentId]];//{};
      const parentEl = data[idMapping[el.parentId]];
      // Add our current el to its parent's `children` array
      //parentEl.children = [...(parentEl.children || []), el];
      obj['children'] = [...(obj['children'] || []), el];
    });

    console.log(this.root);
  }

  bobo() {
    //const nestedObjectsUtil = require('nested-objects-util')
    // this.org22 = nestedObjectsUtil.flatten({
    //   keyA: {
    //     keyE: ['value3', 'value4'],
    //     keyF: null,
    //     keyD: 'value2',
    //     keyB: {
    //       keyC: 'value'
    //     }
    //   }
    // })
    console.log(this.org22);
  }

  //
}
