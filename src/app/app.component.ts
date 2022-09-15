import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'course-project';
  toggleRecipeBook: boolean;
  toggleShoppingList: boolean;

  ngOnInit(): void {
    this.title = 'course-project';
    this.toggleRecipeBook = false;
    this.toggleShoppingList = false;
  }

  onToggleRecipeBook(){
    this.toggleRecipeBook = !this.toggleRecipeBook;
  }

  onToggleShoppingList(){
    this.toggleShoppingList = !this.toggleShoppingList;
  }

}
