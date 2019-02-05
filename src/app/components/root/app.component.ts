import { Component, ViewChild, HostListener, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatDrawer } from '@angular/material';
import { UserInfo } from '../../models/UserInfo';
import { UserService } from '../../services/user.service';
import { MenuItem } from '../../models/MenuItem';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('snav') snav: MatSidenav;
  @ViewChild('drawer') drawer: MatDrawer;

  get isLoggedIn(): boolean { return UserService.isLoggedIn; }
  get loggedUserInfo(): UserInfo { return UserService.loggedUserInfo; }
  get menuItems(): Array<MenuItem> { return SharedService.navbarMenuList; }

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  private screenHeight: number;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight - 56;
    // this.screenWidth = window.innerWidth;
  }

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.onResize();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  mobBtnClick() {
    this.snav.toggle();
  }
}
