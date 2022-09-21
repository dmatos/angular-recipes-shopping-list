import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../model/recipe.model";
import {ShoppingListService} from "../../shopping-list/service/shopping-list.service";
import {RecipeService} from "../service/recipe.service";
import {ActivePerfRecorder} from "@angular/compiler-cli/src/ngtsc/perf";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.recipe = this.recipeService.getSelectedRecipe();
    this.route.params.subscribe((params: Params) => {
      this.recipeService.selectRecipeById(+params['id']);
      this.recipe = this.recipeService.getSelectedRecipe();
      console.log(this.recipe);
    })
  }

  private sendToShoppingList(){
    for(let ingredient of this.recipe.ingredients){
      this.shoppingListService.addIngredient(ingredient);
    }
  }

  onToShoppingListClick(){
    this.sendToShoppingList();
    return false;
  }
}
