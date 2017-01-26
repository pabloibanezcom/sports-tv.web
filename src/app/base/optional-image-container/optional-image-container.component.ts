import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'st-optional-image-container',
  templateUrl: './optional-image-container.component.html',
  styleUrls: ['./optional-image-container.component.scss']
})
export class OptionalImageContainerComponent implements OnInit {

  @Input() conditional: any;
  @Input() imgSrc: string;
  constructor() { }

  ngOnInit() {
  }

}
