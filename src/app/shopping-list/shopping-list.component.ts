import { Component, OnInit } from '@angular/core';
import {IngredientModel} from "../shared/ingredient.model";


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel("Tomatoes", 10),
    new IngredientModel("Apples", 5)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  ingredientAdded(ingredient:IngredientModel){
    this.ingredients.push(ingredient);
  }

}
