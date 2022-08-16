import { createAction, props } from '@ngrx/store';
import { GalleryModel } from '../comps/gallery/gallery.model';

export const retrievedGalleryList = createAction(
  '[Gallery API] Gallery API Success',
  props<{ allGallery: GalleryModel[] }>()
);

export const invokeGalleryAPI = createAction('[Gallery API] Invoke API');

export const removeBook = createAction('[Gallery Collection] Remove Book', props<{ bookId: number }>());
