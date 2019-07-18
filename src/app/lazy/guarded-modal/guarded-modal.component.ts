import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guarded-modal',
  templateUrl: './guarded-modal.component.html',
  styleUrls: ['./guarded-modal.component.scss']
})
export class GuardedModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  useArtifact() {
    return 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }

}
