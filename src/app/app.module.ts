import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrgChartModule } from 'angular-org-chart';
//import { RouterModule, Routes } from '@angular/router'
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import {
  WtfComponent,
  DialogContentExampleDialog,
} from './comps/wtf/wtf.component';
import { PageNotFoundComponent } from './comps/page-not-found/page-not-found.component';
import { RootComponent } from './comps/root/root.component';
import { AddressComponent } from './comps/address/address.component';
import { GalleryComponent } from './comps/gallery/gallery.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './comps/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { TreeComponent } from './comps/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { TableComponent } from './comps/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccordianComponent } from './comps/accordian/accordian.component';
import { DialogBoxComponent } from './comps/dialog-box/dialog-box.component';
import {
  TableFromUrlComponent,
  DialogOverviewExampleDialog,
} from './comps/table-from-url/table-from-url.component';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { GalleryEffect } from './comps/gallery/gallery.effect';
import { GalleryService } from './comps/gallery/gallery.service';
import { galleryReducer } from './store/gallery.reducer';
// import { booksReducer } from './store/books.reducer';
// import { collectionReducer } from './store/collection.reducer';

import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

// import {
//   AppState,
//   reducers,
//   CustomSerializer,
//   effects
// } from './store';
import { environment } from 'src/environments/environment';
//import { CircleSpinnerComponent } from './comps/circleSpinner/circleSpinner';
//import { LoadingIndicatorService } from './services/LoadingIndicatorService';
//import { LoadingInterceptorService } from './services/LoadingInterceptorService';
//import { HelloComponent } from './comps/hello.component';
//import { NetworkInterceptor } from './services/network.interceptor';
import { SpinnerInterceptorService } from './core/services/spinner-interceptor.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { MyorgchartComponent } from './comps/myorgchart/myorgchart.component';
import { TableDynamicColumnsExampleComponent } from './comps/tables/table-dynamic-columns-example/table-dynamic-columns-example';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

//const routes: Routes = []
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WtfComponent,
    DialogContentExampleDialog,
    PageNotFoundComponent,
    RootComponent,
    AddressComponent,
    DashboardComponent,
    TreeComponent,
    AccordianComponent,
    TableComponent,
    DialogBoxComponent,
    TableFromUrlComponent,
    TableDynamicColumnsExampleComponent,
    DialogOverviewExampleDialog,
    GalleryComponent,
    SpinnerComponent,
    MyorgchartComponent,
    //CircleSpinnerComponent
  ],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([GalleryEffect]),
    StoreModule.forRoot({ gallery: galleryReducer }),

    //CommonModule,
    //RouterModule.forRoot(routes),
    OrgChartModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    LayoutModule,
    CdkAccordionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatMenuModule,
    MatTreeModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  providers: [GalleryService,

    //LoadingIndicatorService,
    //{ provide: HTTP_INTERCEPTORS,      useClass: NetworkInterceptor,      multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptorService, multi: true }


  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
function effects(
  effects: any
): any[] | import('@angular/core').Type<any> | ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}
