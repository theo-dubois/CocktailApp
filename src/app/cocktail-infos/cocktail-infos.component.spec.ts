import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailInfosComponent } from './cocktail-infos.component';

describe('CocktailInfosComponent', () => {
  let component: CocktailInfosComponent;
  let fixture: ComponentFixture<CocktailInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CocktailInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
