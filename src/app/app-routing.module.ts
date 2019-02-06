import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/public-pages/welcome/welcome.component';
import { UnderConstructionComponent } from './components/public-pages/under-construction/under-construction.component';
import { UnionComponent } from './components/public-pages/union/union.component';
import { AboutIranComponent } from './components/public-pages/about-iran/about-iran.component';
import { PhotoGalleryComponent } from './components/public-pages/photo-gallery/photo-gallery.component';
import { PressComponent } from './components/public-pages/press/press.component';
import { CurrentEventsComponent } from './components/public-pages/current-events/current-events.component';
import { ImprintComponent } from './components/public-pages/imprint/imprint.component';
import { AboutDeveloperComponent } from './components/public-pages/about-developer/about-developer.component';
import { ContactUsComponent } from './components/public-pages/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: ''
  },
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'union',
    component: UnionComponent,
  },
  {
    path: 'about-iran',
    component: AboutIranComponent,
  },
  {
    path: 'photo-gallery',
    component: PhotoGalleryComponent,
  },
  {
    path: 'press',
    component: PressComponent,
  },
  {
    path: 'current-events',
    component: CurrentEventsComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: 'about-developer',
    component: AboutDeveloperComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  /*
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
