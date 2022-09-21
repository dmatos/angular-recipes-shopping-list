import {ActivatedRouteSnapshot, Params, Resolve, RouterStateSnapshot} from "@angular/router";
import {Recipe} from "../model/recipe.model";
import {Observable} from "rxjs";
import {RecipeService} from "../service/recipe.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeDetailResolverService implements Resolve<Recipe> {

  constructor(private recipeService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    this.recipeService.selectRecipeById(route.params['id']);
    return this.recipeService.getSelectedRecipe();
  }

}
