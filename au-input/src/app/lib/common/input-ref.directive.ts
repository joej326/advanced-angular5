import { Directive, HostListener } from '@angular/core';

// this selector says to apply this directive to allinputs within the 'app-au-fa-input' components
@Directive({
  selector: 'app-au-fa-input input'
})
export class InputRefDirective {

  focus = false;

  constructor() { }

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }


}
