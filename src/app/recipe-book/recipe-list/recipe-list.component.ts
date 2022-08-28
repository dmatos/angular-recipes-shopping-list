import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test recipe', 'https://media.istockphoto.com/photos/nachos-supreme-picture-id474048190'),
    new Recipe('A 2nd Test Recipe', 'This is simply a 2nd test recipe', 'https://media.istockphoto.com/photos/nachos-supreme-picture-id474048190')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
