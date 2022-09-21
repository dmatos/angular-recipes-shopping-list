import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "./model/recipe.model";
import {RecipeService} from "./service/recipe.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
