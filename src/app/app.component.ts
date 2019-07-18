import { Subscription } from 'rxjs/Subscription';
import { CanScrollService } from './_services/can-scroll.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouteMasterService } from 'layout-master';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  canScrollSubscription: Subscription;

  constructor(
    public router: Router,
    public rm: RouteMasterService,
    private canScroll: CanScrollService,
  ) {}

  ngOnInit() {
    this.canScrollSubscription = this.canScroll.createCheckIfBodyCanScrollSubscription();
  }
  ngOnDestroy() {
    this.canScrollSubscription.unsubscribe();
  }
}
