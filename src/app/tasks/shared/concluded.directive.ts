import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appConcluded]'
})
export class ConcludedDirective {

  @Input() appConcluded: boolean;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    if ( this.appConcluded ) {
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
