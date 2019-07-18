import { first } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteMasterService } from 'layout-master';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-complex-modal',
  templateUrl: './complex-modal.component.html',
  styleUrls: ['./complex-modal.component.scss']
})
export class ComplexModalComponent implements OnInit, OnDestroy {

  routeData;
  params;
  querySub: Subscription;;
  fragmentSub: Subscription;
  queryParams;
  fragment;

  constructor(
    private route: ActivatedRoute,
    private rm: RouteMasterService,
  ) { }

  ngOnInit() {
    // View Complex Param Map with Route Master
    this.params = this.rm.params('rm-router-app-wide-modal');
    this.routeData = this.rm.data('rm-router-app-wide-modal');

    // Other Angular Stuff Still works too..
    this.querySub = this.route.queryParams.subscribe(params => this.queryParams = params);
    this.fragmentSub =  this.route.fragment.subscribe(fragment => this.fragment = fragment);
  }

  ngOnDestroy() {
    this.querySub.unsubscribe();
    this.fragmentSub.unsubscribe();
  }
}
