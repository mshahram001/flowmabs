import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'header',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: HeaderComponent },
    ]
  },
  {
    path: 'home',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
    ]
  },
  {
    path: 'footer',
    component: LayoutComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
    ]
  },
  {
    path: 'learn',
    component: LayoutComponent,
    loadChildren: () => import('./pages/learn/learn-routing.module').then(m => m.LearnRoutingModule)
  },
  {
    path: 'home/spark-dyes',
    component: LayoutComponent,
    loadChildren: () => import('./content-pages/spark-dyes/spark-dyes-routing.module').then(m => m.SparkDyesRoutingModule)
  },
  {
    path: 'home/totalseq',
    component: LayoutComponent,
    loadChildren: () => import('./content-pages/totalseq/totalseq-routing.module').then(m => m.TotalSeqRoutingModule),
    data: { breadcrumb: 'TotalSeq' }
  },
  {
    path: 'products/cellular-senescence-kit-red',
    component: LayoutComponent,
    loadChildren: () => import('./products/cellular-senescence-kit-red/cellular-senescence-kit-red-routing.module').then(m => m.CellularSenescenceKitRoutingModule),
    data: { breadcrumb: 'TotalSeq' }
  },
  {
    path: 'products/true-stain-multi-flour-buffer',
    component: LayoutComponent,
    loadChildren: () => import('./products/true-stain-multi-fluor-buffer/true-stain-multi-fluor-buffer-routing.module').then(m => m.TrueStainMultiFlourBufferRoutingModule),
    data: { breadcrumb: 'TotalSeq' }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
