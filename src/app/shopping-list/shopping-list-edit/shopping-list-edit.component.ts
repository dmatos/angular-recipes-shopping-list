import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";
import {ShoppingListService} from "../service/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) nameElementRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountElementRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
    //foo
  }

  ngOnInit(): void {
    //foo
  }

  onAddIngredient(){
    let ingredient:IngredientModel = new IngredientModel(
      this.nameElementRef.nativeElement.value,
      this.amountElementRef.nativeElement.value
    );
    this.shoppingListService.addIngredient(ingredient);
  }
}
