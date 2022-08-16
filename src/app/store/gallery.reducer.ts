import { createReducer, on } from '@ngrx/store';
import { GalleryModel } from '../comps/gallery/gallery.model';
import { removeBook, retrievedGalleryList } from './gallery.action';

export const initialState: ReadonlyArray<GalleryModel> = [];

const _galleryReducer = createReducer(
  initialState,
  on(retrievedGalleryList, (state, { allGallery }) => {
    console.log(`\t _galleryReducer: retrievedGalleryList`);
    return [...allGallery];
  }),
  on(removeBook, (state, { bookId }) => state.filter((src) => src.id !== bookId))
);

export function galleryReducer(state: any, action: any) {
  console.log(`\t _galleryReducer: galleryReducer`);
  return _galleryReducer(state, action);
}
