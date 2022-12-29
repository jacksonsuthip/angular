import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicDirective]',
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    this.render.setStyle(
      this.elementRef.nativeElement,
      'background-color',
      'green'
    );
    // this.elementRef.nativeElement.styles.backgroundColor = 'green';
  }
}
