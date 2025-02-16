import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrueStainMultiFluorBufferComponent } from './true-stain-multi-fluor-buffer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: TrueStainMultiFluorBufferComponent }
];

@NgModule({
  declarations: [TrueStainMultiFluorBufferComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Lazy-loaded routes
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class TrueStainMultiFlourBufferRoutingModule { }

