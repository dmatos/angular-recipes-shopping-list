import {EventEmitter, Injectable} from "@angular/core";
import {IngredientModel} from "../../shared/ingredient.model";

@Injectable()
export class ShoppingListService{

  ingredientsChangeEventEmitter = new EventEmitter<IngredientModel[]>();

  private ingredients: IngredientModel[] = [
    new IngredientModel("Tomatoes", 10),
    new IngredientModel("Apples", 5)
  ];

  addIngredient(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientsChangeEventEmitter.emit(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }
}
