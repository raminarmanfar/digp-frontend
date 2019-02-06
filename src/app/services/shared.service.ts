import { UserInfo } from './../models/UserInfo';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../components/ui/dialog/dialog.component';
import { DialogData } from '../models/DialogData';
import { MenuItem } from '../models/MenuItem';
import { SubToolbarItem } from '../models/SubToolbarItem';
import { ServiceResponse } from '../models/ServiceResponse';
import { UserRoleEnum } from 'src/app/models/enums/UserRoleEnum';
import { DataOperation } from '../models/enums/DataOperationEnum';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private static navbarMenuItems: Array<MenuItem>;
  static subToolBarInfo: Array<SubToolbarItem>;

  static get navbarMenuList(): Array<MenuItem> | null {
    const currentUserRole: UserRoleEnum = UserService.loggedUserInfo ? UserService.loggedUserInfo.role : UserRoleEnum.Public;
    return SharedService.navbarMenuItems ?
      SharedService.navbarMenuItems.filter(result => result.accessibleBy.includes(currentUserRole)) : null;
  }

  static get adminAndUserSharedRoutes(): Array<string> {
    return [
      '/dashboard',
      '/dashboard/user-details/' + DataOperation.UpdateLoggedUser,
      '/dashboard/change-password'
    ];
  }

  static getSubToolBarInfo(url: string) {
    const result = SharedService.subToolBarInfo.find(o => o.url === url);
    return result ? result : SharedService.subToolBarInfo.find(o => o.url === '**');
  }

  static initialize() {
    SharedService.navbarMenuItems = new Array<MenuItem>(
      new MenuItem('Home', '/', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'Home page'),
      new MenuItem('The Union', '/union', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'The Union'),
      new MenuItem('About Iran', '/about-iran', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'About Iran'),
      new MenuItem('Photo Gallery', '/photo-gallery', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'Photo gallery'),
      new MenuItem('Press', '/press', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'Our community in the press'),
      new MenuItem('Current Events', '/current-events', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'Current events'),
      new MenuItem('Imprint', '/imprint', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'Imprint'),
      new MenuItem('About Developer', '/about-developer', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'About developer'),
      new MenuItem('Contact Us', '/contact-us', new Array<UserRoleEnum>(UserRoleEnum.Public, UserRoleEnum.User, UserRoleEnum.Admin), 'Contact us'),
    );

    SharedService.subToolBarInfo = new Array<SubToolbarItem>(
      new SubToolbarItem('/', 'Welcome to Iran and Germany community!', 'Passau City'),
      new SubToolbarItem('/union', 'The Community', 'Our community in the Passau.'),
      new SubToolbarItem('/about-iran', 'About Iran', 'Brief information about Iranian history and culture.'),
      new SubToolbarItem('/photo-gallery', 'Photo Gallery', 'Photos of events and celebrations.'),
      new SubToolbarItem('/press', 'Press and news', 'Our Community in the Press and news.'),
      new SubToolbarItem('/current-events', 'Current Events', 'List of oncomming and current events.'),
      new SubToolbarItem('/imprint', 'Imprint', 'The Imprint.'),
      new SubToolbarItem('/about-developer', 'About Developer', 'Contact developer.'),
      new SubToolbarItem('/contact-us', 'Contact Us', 'Contact us.'),

      /*
      new SubToolbarItem('/dashboard', 'Dashboard', 'Your personal dashboard'),
      new SubToolbarItem('/dashboard/user-details/' + DataOperation.UpdateLoggedUser,
        'Update your personal data', 'Your information list to be updated.'),
      new SubToolbarItem('/dashboard/user-details/' + DataOperation.AddByAdmin,
        'Add new user', 'New user personal information.'),
      new SubToolbarItem('/dashboard/user-details/' + DataOperation.UpdateByAdmin,
        'Update selected user personal data', 'Selected user personal information to be updated.'),
      new SubToolbarItem('/dashboard/change-password', 'Change Password', 'Change your password.'),
      new SubToolbarItem('/dashboard', 'User Dashboard', 'Your personal applications.'),
      new SubToolbarItem('/dashboard', 'Admin Dashboard', 'Your personal applications.'),
      new SubToolbarItem('/dashboard/manage-users', 'Users List', 'Manage users information.'),
      new SubToolbarItem('/dashboard/add-update-user/add', 'Add new user', 'Fill in the form to add new user.'),
      new SubToolbarItem('/dashboard/add-update-user/update', 'Update selected user information', 'Modify user information.'),
      new SubToolbarItem('**', 'The page is under construction.', 'Thanks for your patient.')
      */
    );
  }

  constructor(private dialog: MatDialog, private http: HttpClient) { }

  openDialog(width: number, dialogData: DialogData): Promise<any> {
    return new Promise((resolve: any) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: width.toString(),
        data: dialogData
      });

      dialogRef.afterClosed().subscribe(result => {
        resolve(result);
      });
    });
  }
}

SharedService.initialize();
