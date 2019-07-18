import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RouteMasterService, RouteMasterNavigationEnd } from 'layout-master';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  anchorText = `Open Home Modal - Outlet: 'ng-router-app-wide-modal'`;

  constructor(
  ) { }

  ngOnInit() {
  }
}
