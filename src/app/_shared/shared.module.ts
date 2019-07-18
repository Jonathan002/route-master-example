import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CloseModalButtonComponent } from './../_core/close-modal-button/close-modal-button.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CloseModalButtonComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    NgbModule,
    CloseModalButtonComponent,
  ]
})
export class SharedModule { }
