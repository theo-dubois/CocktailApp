import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInfosComponent } from './ingredient-infos.component';

describe('IngredientInfosComponent', () => {
  let component: IngredientInfosComponent;
  let fixture: ComponentFixture<IngredientInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
