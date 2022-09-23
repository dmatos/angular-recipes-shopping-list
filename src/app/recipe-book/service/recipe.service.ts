import {Injectable} from "@angular/core";
import {Recipe} from "../model/recipe.model";
import {IngredientModel} from "../../shared/ingredient.model";

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [
    new Recipe(1, 'A Test Recipe', 'This is simply a test recipe', 'https://media.istockphoto.com/photos/nachos-supreme-picture-id474048190'
    ,[new IngredientModel('farinha', 1), new IngredientModel('ovos', 6)]),
    new Recipe(2, 'A 2nd Test Recipe', 'This is simply a 2nd test recipe', 'https://media.istockphoto.com/photos/nachos-supreme-picture-id474048190'
    ,[])
  ];

  selectedRecipe: Recipe = null;

  getRecipes(){
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

  selectRecipeById(id: number){
    this.selectedRecipe = this.recipes.filter( (recipe) => {
      return recipe.id === id;
    })[0];
  }

  getSelectedRecipe(){
    if(this.selectedRecipe === null || this.selectedRecipe === undefined) this.selectRecipeById(1);
    return this.selectedRecipe;
  }

  getNewRecipe(){
    return new Recipe(this.recipes.length, "", "", "", []);
  }

}
