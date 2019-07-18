import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  issues = [
    'https://github.com/angular/angular/issues/17343',
    'https://github.com/angular/angular/issues/10981',
    'https://github.com/angular/angular/issues/14324',
    'https://github.com/angular/angular/issues/26964',
  ];

  constructor() { }

  ngOnInit() {
  }

}
