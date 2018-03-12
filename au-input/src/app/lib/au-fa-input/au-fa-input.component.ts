import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit {

  @Input() icon: string;
  @Input() placeholder = '';

  constructor() { }

  ngOnInit() {
  }

  getClasses() {
    const cssClasses = {};

    if (this.icon === 'stripe') {
      cssClasses['fab'] = true;
      cssClasses['fa-cc-stripe'] = true;
    } else {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }

}
