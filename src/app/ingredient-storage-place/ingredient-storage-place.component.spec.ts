import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientStoragePlaceComponent } from './ingredient-storage-place.component';

describe('IngredientStoragePlaceComponent', () => {
  let component: IngredientStoragePlaceComponent;
  let fixture: ComponentFixture<IngredientStoragePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientStoragePlaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientStoragePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
