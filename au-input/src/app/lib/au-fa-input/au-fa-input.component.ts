import { Component, OnInit, Input } from '@angular/core';
import { ContentChild, AfterContentInit } from '@angular/core';
import { InputRefDirective } from 'app/lib/common/input-ref.directive';


@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.scss']
})
export class AuFaInputComponent implements OnInit, AfterContentInit {

  @Input() icon: string;
  @Input() placeholder = '';
  // DOM reference tag (#) is the argument. ContentChild works like ViewChild but with elements inside ng-content
  @ContentChild(InputRefDirective)
  input: InputRefDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log('input', this.input);
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
