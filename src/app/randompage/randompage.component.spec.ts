import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandompageComponent } from './randompage.component';

describe('RandompageComponent', () => {
  let component: RandompageComponent;
  let fixture: ComponentFixture<RandompageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandompageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandompageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
