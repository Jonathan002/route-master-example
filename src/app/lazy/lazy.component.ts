import { Component, OnInit } from '@angular/core';

interface DivContent {
  description: string;
  routerLink: any[];
  anchorText: string;
  onClick?: any;
  queryParams?: {};
  fragment?: string;
}

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  showErrorAlert = false;

  mainFeature: DivContent[] = [
    {
      description: `The anchor button below will fail as Angular does not allow lazy components to be routed outside it's own module.
      See the browser console for error when the button is clicked.`,
      routerLink: ['', { outlets: { 'ng-router-app-wide-modal': ['lazy-modal'] } }],
      anchorText: `Open Lazy Modal - Outlet: 'ng-router-app-wide-modal'`,
      onClick: () => {
        this.showErrorAlert = true;
      },
    },
    {
      description: `Using Route Master, you may freely add a custom component from a lazy module and have it routed outside the
      module.`,
      routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['lazy-modal'] } }],
      anchorText: `Open Lazy Modal - Outlet: 'rm-router-app-wide-modal'`,
    },
  ];

  otherFeatures: DivContent[] = [
    {
      description: `404 Routing`,
      routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['lazy-404-modal', '404-child'] } }],
      anchorText: `Open 404 Modal - Outlet: 'rm-router-app-wide-modal'`,
    },
    {
      description: `:Route-Parameters`,
      routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['route-param-modal', '123'] } }],
      anchorText: `Open Route Parameters :id = 123 - Outlet: 'rm-router-app-wide-modal'`,
    },
    {
      description: `Static Route Data`,
      routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['static-route-data-modal'] } }],
      anchorText: `Open Static Route Data Modal - Outlet: 'rm-router-app-wide-modal'`,
    },
    {
      description: `Can Activate Guard`,
      routerLink: ['', { outlets: { 'rm-router-app-wide-modal': ['guarded-modal'] } }],
      anchorText: `Open Guarded Modal - Outlet: 'rm-router-app-wide-modal'`,
    },
    {
      description: `Add Predefined Classes for Created Components`,
      routerLink: ['', { outlets: { 'custom-classes-modal': ['lazy-modal'] } }],
      anchorText: `Open Lazy Modal Again - Outlet: 'custom-classes-modal'`,
    },
  ];

  complexRouteTesting: DivContent[] = [
    {
      description: `Test a Complex Route with Route Master`,
      routerLink: [
        '',
        {
          outlets: {
            'rm-router-app-wide-modal': ['complex', '456', 'demo', '789', { matrixData: 'red pill', fooBar: 'barFoo' }]
          }
        }],
      queryParams: { foo: 'bar', data: true },
      fragment: 'my-special-fragment',
      anchorText: `Test A Complex Route - Outlet: 'rm-router-app-wide-modal'`,
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
