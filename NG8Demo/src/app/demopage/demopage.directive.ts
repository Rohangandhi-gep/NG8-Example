import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[plugin-components]',
})
export class DemoPageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}