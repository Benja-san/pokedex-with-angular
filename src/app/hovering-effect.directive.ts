import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoveringEffect]',
})
export class HoveringEffectDirective {
  private highlight(color: string) {
    this.el.nativeElement.style.boxShadow = '-2px 2px 12px ' + color;
  }

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgba(255,255,255,.3');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('transparent');
  }
}
