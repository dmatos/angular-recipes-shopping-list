import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  @Output() recipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(recipe: Recipe){
   this.selectedRecipe = recipe;
  }
}
