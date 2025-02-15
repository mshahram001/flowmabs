import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LearnComponent } from './learn.component';

const routes: Routes = [
  { path: ':topic', component: LearnComponent }
];

@NgModule({
  declarations: [LearnComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Lazy-loaded routes
  ]
})
export class LearnRoutingModule { }
