import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardedModalComponent } from './guarded-modal.component';

describe('GuardedModalComponent', () => {
  let component: GuardedModalComponent;
  let fixture: ComponentFixture<GuardedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
