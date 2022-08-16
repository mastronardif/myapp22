import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { GalleryService } from './gallery.service';

@Injectable()
export class GalleryEffect {
  constructor(
    private actions$: Actions,
    private galleryService: GalleryService
  ) {}

  //loadGallery$ = of();
  loadGallery$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Gallery API] Invoke API'),
      mergeMap(() =>
        this.galleryService
          .loadGallery()
          .pipe(map((data) => ({ type: '[Gallery API] Gallery API Success', allGallery: data })))
      )
    )
  );
}
