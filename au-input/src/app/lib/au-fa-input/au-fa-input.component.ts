import { Component, OnInit, Input } from '@angular/core';
import { ContentChild, AfterContentInit } from '@angular/core';
import { InputRefDirective } from 'app/lib/common/input-ref.directive';
import { HostBinding } from '@angular/core';


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
    if (!this.input) {
      console.error('error');
    }
  }

  // HostBinding binds the directive to a property on our host.
  // this works with our directive to dtermine whether or not the input-focus class should be applied.
  // note that our directive is set to be applied to every input element inside our au-fa-inout components (see directive selector).
  //  So the "Host" is the inputs
  @HostBinding('class.input-focus')
  get isInputFocus(): boolean {
    return this.input ? this.input.focus : false;
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
