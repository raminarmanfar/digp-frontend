import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/public-pages/welcome/welcome.component';
import { UnderConstructionComponent } from './components/public-pages/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: 'public',
    loadChildren: '../app/components/public-pages/public.module#PublicModule'
  },/*
  {
    path: 'dashboard',
    loadChildren: '../app/components/dashboard/dashboard.module#DashboardModule'
  },*/
  {
    path: '**',
    component: UnderConstructionComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
