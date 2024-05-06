import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyboyRoutingModule } from './lazyboy-routing.module';
import { LazyboyComponent } from './lazyboy.component';


@NgModule({
  declarations: [LazyboyComponent],
  imports: [
    CommonModule,
    LazyboyRoutingModule
  ]
})
export class LazyboyModule { }
