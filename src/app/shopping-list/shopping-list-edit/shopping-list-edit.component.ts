import {Component, EventEmitter, OnInit, Output, ElementRef, ViewChild} from '@angular/core';
import {IngredientModel} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() editEmitter: EventEmitter<IngredientModel> = new EventEmitter<IngredientModel>();
  @ViewChild('nameInput', {static: true}) nameElementRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountElementRef: ElementRef;

  constructor() {
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
    this.editEmitter.emit(ingredient);
  }
}
