import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonsComponent } from './pokemons.component';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonsComponent]
    });
    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
