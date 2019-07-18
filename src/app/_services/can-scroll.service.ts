import { Injectable } from '@angular/core';
import { RouteMasterService } from 'layout-master';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CanScrollService {
  constructor(
    private router: Router,
    private rm: RouteMasterService,
  ) { }

  createCheckIfBodyCanScrollSubscription() {
    return this.rm.navigationEnd$.subscribe(rmNavigationEnd => {
      if (this.router.url.includes('(ng-router-app-wide-modal:')
      || this.router.url.includes('(rm-router-app-wide-modal:')
      || this.router.url.includes('(custom-classes-modal:')) {
        window.document.body.style.overflow = 'hidden';
      } else {
        window.document.body.style.overflow = 'initial';
      }
    });
  }
}
