import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadingService } from 'src/app/loading.service';
//import { GalleryService } from './gallery.service';
import { retrievedGalleryList, invokeGalleryAPI } from '../../store/gallery.action';
import {
  uniqueAlbumIds,
  albumCollectionByAlbumId,
} from '../../store/gallery.selector';
import { GalleryModel } from './gallery.model';

@Component({
  templateUrl: './gallery.component.html',
  selector: 'app-gallery',
})
export class GalleryComponent implements OnInit, OnChanges {
  selectedAlbumId = -1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(this.selectedAlbumId)));


  constructor(
    //public loader: LoadingService,
    private store: Store<{ gallery: GalleryModel[] }>
    //private galleryService: GalleryService
  ) {console.log(`\t GalleryComponent: constructor`);}

  ngOnInit(): void {
    console.log(" GalleryComponent: ngOnInit()");
    this.store.dispatch(invokeGalleryAPI());
    // this.galleryService.loadGallery().subscribe((gallery) => {
    //   console.log(gallery);
    //   this.store.dispatch(
    //     retrievedGalleryList({ allGallery: gallery as GalleryModel[] })
    //   );
    // });
  }
  albumChange(event:number) {
    this.allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(event)));
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(`GalleryComponent: ngOnChanges (${changes})`);

  }
}
