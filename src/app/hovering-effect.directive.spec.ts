import { HoveringEffectDirective } from './hovering-effect.directive';

describe('HoveringEffectDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div'),
    };
    const directive = new HoveringEffectDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
