import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() recipeBookToggle = new EventEmitter<{}>();
  @Output() shoppingListToggle = new EventEmitter<{}>();

  constructor() {
    this.shoppingListToggle =  new EventEmitter<{}>();
    this.recipeBookToggle =  new EventEmitter<{}>();
  }

  ngOnInit(): void {
  }

  toggleRecipeBook(){
    this.recipeBookToggle.emit({});
  }

  toggleShoppingList(){
    this.shoppingListToggle.emit({});
  }

}
