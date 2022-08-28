import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListIngredientComponent } from './shopping-list-ingredient.component';

describe('ShoppingListIngredientComponent', () => {
  let component: ShoppingListIngredientComponent;
  let fixture: ComponentFixture<ShoppingListIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListIngredientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
