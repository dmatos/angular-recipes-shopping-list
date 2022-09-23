import {Injectable} from "@angular/core";
import {IngredientModel} from "../../shared/ingredient.model";
import {Subject} from "rxjs";

@Injectable()
export class ShoppingListService{

  ingredientsChangeSubject = new Subject<IngredientModel[]>();


  private ingredients: IngredientModel[] = [
    new IngredientModel("Tomatoes", 10),
    new IngredientModel("Apples", 5)
  ];

  addIngredient(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientsChangeSubject.next(this.ingredients.slice());
  }

  getIngredients(){
    return this.ingredients.slice();
  }
}
