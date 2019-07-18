import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  home = { name: 'Home', path: '' };
  navs = [
    this.home,
    { name: 'Lazy Module', path: ['/', 'lazy-module'] },
  ];

  constructor() { }

  ngOnInit() {
  }

}
