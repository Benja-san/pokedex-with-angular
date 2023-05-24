import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoveringEffect]',
})
export class HoveringEffectDirective {
  private highlight(color: string) {
    this.el.nativeElement.style.boxShadow = '-4px 4px 0px ' + color;
  }

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition = 'box-shadow 0.4s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#ffffff');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('transparent');
  }
}
