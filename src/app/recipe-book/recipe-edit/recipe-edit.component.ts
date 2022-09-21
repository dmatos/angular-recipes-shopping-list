import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../service/recipe.service";
import {Recipe} from "../model/recipe.model";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if(params['id'] === null || params['id'] === undefined) this.recipe = this.recipeService.getNewRecipe();
      else {
        this.recipe = this.recipeService.getSelectedRecipe();
      }
    })

  }

}
