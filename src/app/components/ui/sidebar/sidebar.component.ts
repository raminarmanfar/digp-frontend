import { Component } from '@angular/core';
import { MenuItem } from '../../../models/MenuItem';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  get menuItems(): Array<MenuItem> { return SharedService.navbarMenuList; }

  constructor() { }
}
