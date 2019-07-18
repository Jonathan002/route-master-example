import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamModalComponent } from './route-param-modal.component';

describe('RouteParamModalComponent', () => {
  let component: RouteParamModalComponent;
  let fixture: ComponentFixture<RouteParamModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParamModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
