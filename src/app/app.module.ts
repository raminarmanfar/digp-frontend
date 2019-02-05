import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialsModule } from './app-material-module';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(fas, far);

import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
import { UserGuard } from './auth/guards/user.guard';
import { AdminGuard } from './auth/guards/admin.guard';

import { AppComponent } from './components/root/app.component';
import { HeaderComponent } from './components/ui/header/header.component';
import { SubHeaderComponent } from './components/ui/sub-header/sub-header.component';
import { FooterComponent } from './components/ui/footer/footer.component';
import { SidebarComponent } from './components/ui/sidebar/sidebar.component';
import { DialogComponent } from './components/ui/dialog/dialog.component';
import { PopupLoginComponent } from './components/public-pages/popup-login/popup-login.component';
import { WelcomeComponent } from './components/public-pages/welcome/welcome.component';
import { UnderConstructionComponent } from './components/public-pages/under-construction/under-construction.component';
import { UnionComponent } from './components/public-pages/union/union.component';
import { AboutIranComponent } from './components/public-pages/about-iran/about-iran.component';
import { PhotoGalleryComponent } from './components/public-pages/photo-gallery/photo-gallery.component';
import { PressComponent } from './components/public-pages/press/press.component';
import { CurrentEventsComponent } from './components/public-pages/current-events/current-events.component';
import { ImprintComponent } from './components/public-pages/imprint/imprint.component';
import { AboutDeveloperComponent } from './components/public-pages/about-developer/about-developer.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    AppMaterialsModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    SidebarComponent,
    DialogComponent,
    PopupLoginComponent,
    WelcomeComponent,
    UnderConstructionComponent,
    UnionComponent,
    AboutIranComponent,
    PhotoGalleryComponent,
    PressComponent,
    CurrentEventsComponent,
    ImprintComponent,
    AboutDeveloperComponent,
  ],
  entryComponents: [
    DialogComponent,
    PopupLoginComponent,
  ],
  providers: [
    AuthService,
    UserGuard,
    AdminGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
