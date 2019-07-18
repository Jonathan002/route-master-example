import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-close-modal-button',
  templateUrl: './close-modal-button.component.html',
  styleUrls: ['./close-modal-button.component.scss']
})
export class CloseModalButtonComponent implements OnInit {

  @Input() buttonText = 'Close Modal';

  constructor() { }

  ngOnInit() {
  }

}
