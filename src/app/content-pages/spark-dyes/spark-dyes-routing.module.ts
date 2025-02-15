import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SparkDyesComponent } from './spark-dyes.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: SparkDyesComponent }
];

@NgModule({
  declarations: [SparkDyesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Lazy-loaded routes
    MatButtonModule
  ]
})
export class SparkDyesRoutingModule { }
