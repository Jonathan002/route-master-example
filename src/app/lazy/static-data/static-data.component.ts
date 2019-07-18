import { Subscription, Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouteMasterService } from 'angular-layout-master';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.scss']
})
export class StaticDataComponent implements OnInit, OnDestroy {

  outletCurrentData;
  outletData$: Observable<any>;
  outletDataSubscription: Subscription;

  constructor(
    private rm: RouteMasterService,
  ) { }

  ngOnInit() {
    // Subscribe to Data Stream
    this.outletData$ = this.rm.data$('rm-router-app-wide-modal');
    this.outletDataSubscription = this.outletData$.subscribe(data => {
      console.log('Subscribe to outlet data', data);
    });

    // or just get current outlet data value..
    this.outletCurrentData = this.rm.data('rm-router-app-wide-modal');
    console.log('log outletCurrentData', this.outletCurrentData);
  }

  ngOnDestroy() {
    this.outletDataSubscription.unsubscribe();
  }
}


