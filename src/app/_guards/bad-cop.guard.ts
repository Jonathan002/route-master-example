import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BadCopGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const url = 'lazy-module(rm-router-app-wide-modal:unauthorized)';
    const tree = this.router.parseUrl(url);
    // Fake http waiting..
    return new Promise((resolve, reject) => setTimeout(() => {
      // BadCopGuard says no and redirects
      console.log('about to resolve tree');
      resolve(tree);
    }, 1500));
  }
}
