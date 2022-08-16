import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}

  loadGallery() {
    console.log('\t loadGallery()');
      return this.http
        .get('https://jsonplaceholder.typicode.com/photos')
        .pipe(map((albums) => albums || []));
  }
}
