/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { HeroService } from 'src/app/services/hero.service';
import { GoogleBooksService } from 'src/app/book-list/books.service';
import { select, Store } from '@ngrx/store';
import { albumCollectionByAlbumId, uniqueAlbumIds } from 'src/app/store/gallery.selector';
import { GalleryModel } from '../gallery/gallery.model';
import { removeBook } from 'src/app/store/gallery.action';
import { DialogContentExampleComponent } from './dialog-content-example.component';

//import { selectBookCollection, selectBooks } from '../../store/books.selectors';
// import {
//   retrievedBookList,
//   addBook,
//   removeBook,
// } from '../../state/books.actions';
@Component({
  selector: 'app-wtf',
  templateUrl: './wtf.component.html',
  styleUrls: ['./wtf.component.css'],
})
export class WtfComponent implements OnInit, OnDestroy {
    // books$ = this.store.select(selectBooks);
  // bookCollection$ = this.store.select(selectBookCollection);
  selectedAlbumId = 1; //-1;
  albumIds$ = this.store.pipe(select(uniqueAlbumIds));
  allGallery$ = this.store.pipe(select(albumCollectionByAlbumId(this.selectedAlbumId)));
  // onAdd(bookId: string) {
  //   this.store.dispatch(addBook({ bookId }));
  // }

  private ooo$!: any;
  //hero$!: Observable<any>;
  heroes$: Observable<any> | undefined;
  id: number = 0;
  // galleryId: string = '';
  public now: number=321;
  public date: Date | undefined;

  formSection = new FormGroup({

  });

  onRemove(bookIds: string) {
    bookIds.split(',').forEach(ee=>{console.log(+ee);
      console.log(` onRemove(bookId:${+ee})`);
    this.store.dispatch(removeBook({bookId: +ee}));

    })
    //array1.forEach(element => console.log(element));
    //console.log(` onRemove(bookId:${bookId})`);
    //this.store.dispatch(removeBook({ bookId }));
  }

  constructor(private store: Store<{ gallery: GalleryModel[] }>, private booksService: GoogleBooksService, private fb: FormBuilder,
   // @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog, private route: ActivatedRoute, private router: Router, private service: HeroService) {
    // setInterval(() => {
    //   this.date = new Date()
    // }, 3000)

    // setInterval(this.myFunction, 1000);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // do this if it is a number +params['id']
    });

    console.log(`wtf: init id(${this.id})`);

    //
    // this.booksService
    // .getBooks()
    // .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));

    // const bookId = "X3iTzQEACAAJ";
    // this.store.dispatch(addBook({ bookId }));
    //

    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getInvoice(params.get('id')!))
    );

    this.formSection = new FormGroup({
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
  }

  ngOnDestroy() {
    if (this.ooo$) {
      this.ooo$.unsubscribe();
    }
  }

  dlgData =  {data: ['What','The','apple','orange'], other:{lll: 'fff'}};
  openDialog() {
    // let dialogConfig = new MatDialogConfig();
    // dialogConfig = this.dlgData;

    //const dialogRef = this.dialog.open(DialogContentExampleDialog, dialogConfig);
    const dialogRef = this.dialog.open(DialogContentExampleComponent, {
      //width: '650px',
      data: this.dlgData,
    });



    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      console.log(result);
    });
  }

  // myFunction() {
  //   console.log(`wtf hello ${Date.now()}`);
  //   this.now = Date.now();
  // }
}
// @Component({
//   selector: 'dialog-content-example-dialog',
//   templateUrl: 'dialog-content-example-dialog.html',
// })
// export class DialogContentExampleDialog {}
