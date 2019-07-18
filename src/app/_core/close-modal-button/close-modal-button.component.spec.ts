import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseModalButtonComponent } from './close-modal-button.component';

describe('CloseModalButtonComponent', () => {
  let component: CloseModalButtonComponent;
  let fixture: ComponentFixture<CloseModalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseModalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
