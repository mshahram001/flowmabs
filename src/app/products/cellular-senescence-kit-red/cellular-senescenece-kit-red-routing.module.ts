import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CellularSenescenceKitRedComponent } from './cellular-senescence-kit-red.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: CellularSenescenceKitRedComponent }
];

@NgModule({
  declarations: [CellularSenescenceKitRedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Lazy-loaded routes
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class CellularSenescenceKitRoutingModule { }

