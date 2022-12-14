import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListIngredientComponent } from './shopping-list/shopping-list-ingredient/shopping-list-ingredient.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {DropdownDirective} from "./shared/dropdown.directive";
import {RecipeService} from "./recipe-book/service/recipe.service";
import {ShoppingListService} from "./shopping-list/service/shopping-list.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeDetailResolverService} from "./recipe-book/recipe-detail/recipe-detail-resolver.service";
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListIngredientComponent,
    ShoppingListEditComponent,
    DropdownDirective,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],

  providers: [RecipeService, ShoppingListService, RecipeDetailResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
