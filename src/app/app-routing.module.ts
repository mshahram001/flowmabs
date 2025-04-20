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
  },
  {
    path: 'products/cellular-senescence-kit-red',
    component: LayoutComponent,
    loadChildren: () => import('./products/cellular-senescence-kit-red/cellular-senescence-kit-red-routing.module').then(m => m.CellularSenescenceKitRoutingModule),
  },
  {
    path: 'products/true-stain-multi-flour-buffer',
    component: LayoutComponent,
    loadChildren: () => import('./products/true-stain-multi-fluor-buffer/true-stain-multi-fluor-buffer-routing.module').then(m => m.TrueStainMultiFlourBufferRoutingModule),
  },
  {
  path: 'products/product-type/reagents',
  component: LayoutComponent,
  loadChildren: () => import('./products/reagents/reagents-routing.module').then(m => m.ReagentsRoutingModule),
},
{
  path: 'about-us/our-company',
  component: LayoutComponent,
  loadChildren: () => import('./about-us/our-company/our-company-routing.module').then(m => m.OurComapnyRoutingModule)
},
{
  path: 'about-us/blogs-videos',
  component: LayoutComponent,
  loadChildren: () => import('./about-us/blogs-videos/blogs-videos-routing.module').then(m => m.BlogsVideosRoutingModule)
},
{
  path: 'contact-us',
  component: LayoutComponent,
  loadChildren: () => import('./contact-us/contact-us-routing.module').then(m => m.ContactUsRoutingModule)
},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
