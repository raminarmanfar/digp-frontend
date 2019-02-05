import { Component, OnInit } from '@angular/core';
import { AppInfo } from 'src/app/models/app-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appInfo: AppInfo = AppInfo;

  constructor() { }

  ngOnInit() {
  }

}
