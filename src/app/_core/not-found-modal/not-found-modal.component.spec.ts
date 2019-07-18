import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundModalComponent } from './not-found-modal.component';

describe('NotFoundModalComponent', () => {
  let component: NotFoundModalComponent;
  let fixture: ComponentFixture<NotFoundModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
