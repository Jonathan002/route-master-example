import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { RouteMasterService } from 'angular-layout-master';

@Component({
  selector: 'app-route-param-modal',
  templateUrl: './route-param-modal.component.html',
  styleUrls: ['./route-param-modal.component.scss']
})
export class RouteParamModalComponent implements OnInit {

  paramMapData;
  params;
  paramDataType;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rm: RouteMasterService,
  ) {}

  ngOnInit() {
    // Does not work with lazy components
    console.log('--- Next 2 logs test Angular ActivatedRoute.paramMap & Angular ActivatedRoute.params: ----');
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(`- Angular ActivatedRoute.paramMap 'id' is unavailable at RouteParamModalComponent - Captured Value: `, params.get('id'));
    });
    this.route.params.subscribe((params: ParamMap) => {
      console.log(`- Angular ActivatedRoute.params unavailable in RouteParamModalComponent - Captured Value: `, params);
    });

    // Route Master Workaround
    this.paramMapData = this.rm.paramMap('rm-router-app-wide-modal').get('id');
    this.params = this.rm.params('rm-router-app-wide-modal');
    this.paramDataType = typeof this.paramMapData;
  }

}


