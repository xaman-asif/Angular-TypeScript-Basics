import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  color: string = 'red';

  @Input() colour: string = 'red';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.colour);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.colour);
  }

  ngOnInit(): void {
    console.log(this.elementRef.nativeElement);
    // this.elementRef.nativeElement.style.backgroundColor = this.color;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', this.color);
  }
}
