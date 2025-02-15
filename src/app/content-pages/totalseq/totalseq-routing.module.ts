import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TotalseqComponent } from './totalseq.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TotalseqComponent }
];

@NgModule({
  declarations: [TotalseqComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class TotalSeqRoutingModule { }
