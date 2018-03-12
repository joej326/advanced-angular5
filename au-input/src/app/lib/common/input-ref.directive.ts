import { Directive } from '@angular/core';

// this selector says to apply this directive to allinputs within the 'app-au-fa-input' components
@Directive({
  selector: 'app-au-fa-input input'
})
export class InputRefDirective {

  constructor() { }

}
