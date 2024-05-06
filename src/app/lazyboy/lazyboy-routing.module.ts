import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyboyComponent } from './lazyboy.component';

const routes: Routes = [
  { path: '', component: LazyboyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyboyRoutingModule { }
