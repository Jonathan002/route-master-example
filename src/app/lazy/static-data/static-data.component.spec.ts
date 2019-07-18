import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDataComponent } from './static-data.component';

describe('StaticDataComponent', () => {
  let component: StaticDataComponent;
  let fixture: ComponentFixture<StaticDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
