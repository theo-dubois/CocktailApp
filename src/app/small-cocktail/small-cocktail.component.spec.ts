import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCocktailComponent } from './small-cocktail.component';

describe('SmallCocktailComponent', () => {
  let component: SmallCocktailComponent;
  let fixture: ComponentFixture<SmallCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCocktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
