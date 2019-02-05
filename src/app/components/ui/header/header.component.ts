import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { UserService } from '../../../services/user.service';
import { DataOperation } from '../../../models/enums/DataOperationEnum';
import { PopupLoginComponent } from '../../public-pages/popup-login/popup-login.component';
import { AppInfo } from 'src/app/models/app-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  appInfo: AppInfo = AppInfo;

  @Input('isLoggedIn') public isLoggedIn: boolean;
  @Input() loggedUserInfo: any;
  @Output() mobBtnClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  private username: string;
  private password: string;

  constructor(private dialog: MatDialog, private router: Router, private sharedService: SharedService) { }

  onLoginClick() {
    const dialogRef = this.dialog.open(PopupLoginComponent, {
      width: '350px',
      data: { username: this.username, password: this.password }
    });

    // dialogRef.afterClosed().subscribe((result: ServiceResponse) => {});
  }

  onLogoutClick() {
    UserService.assignLoggedUserInfo(null);
    this.router.navigate(['/']);
  }

  onMobListClick() {
    this.mobBtnClick.emit(true);
  }

  showLoggedUserDetailInfo() {
    UserService.selectedUserInfo = UserService.loggedUserInfo;
    this.router.navigate(['/dashboard/user-details/' + DataOperation.UpdateLoggedUser]);
  }
}
