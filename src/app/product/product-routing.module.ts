import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: ProductComponent }
];

@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Lazy-loaded routes
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ProductRoutingModule { }