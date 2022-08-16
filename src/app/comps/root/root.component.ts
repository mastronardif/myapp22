import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import {
//   selectBookCollection,
//   selectBooks,
// } from 'src/app/store/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  //books$ = this.store.select(selectBooks);
 // bookCollection$ = this.store.select(selectBookCollection);

  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log(`root.component ngOnInit()`);
    //this.books$ = this.store.select(selectBooks);
    //this.bookCollection$ = this.store.select(selectBookCollection);
  }
}
