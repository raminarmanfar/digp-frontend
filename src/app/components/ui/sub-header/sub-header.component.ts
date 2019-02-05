import { Component, OnInit } from '@angular/core';
import { SubToolbarItem } from 'src/app/models/SubToolbarItem';
import { Router, NavigationEnd } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
  private info: SubToolbarItem;

  constructor(private router: Router) {
    this.info = SharedService.getSubToolBarInfo('/');
    this.onRouteChange();
  }

  ngOnInit() {
  }

  private onRouteChange() {
    this.router.events.subscribe(val => {
      // see also
      if (val instanceof NavigationEnd) {
        this.info = SharedService.getSubToolBarInfo(val.url);
      }
    });
  }

}
