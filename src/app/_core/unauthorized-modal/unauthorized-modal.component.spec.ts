import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedModalComponent } from './unauthorized-modal.component';

describe('UnauthorizedModalComponent', () => {
  let component: UnauthorizedModalComponent;
  let fixture: ComponentFixture<UnauthorizedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthorizedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnauthorizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
