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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
