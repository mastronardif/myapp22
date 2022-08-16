import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './books.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  q="Isaac Asimov"; //oliver%20sacks"
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Array<Book>> {
    const url = `https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=${this.q}`;
    return this.http
      .get<{ items: Book[] }>(
        url
        //'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
