import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyModalComponent } from './lazy-modal.component';

describe('LazyModalComponent', () => {
  let component: LazyModalComponent;
  let fixture: ComponentFixture<LazyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
