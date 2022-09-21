import {RouterModule, Routes} from "@angular/router";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {NgModule} from "@angular/core";
import {RecipeListComponent} from "./recipe-book/recipe-list/recipe-list.component";
import {RecipeDetailResolverService} from "./recipe-book/recipe-detail/recipe-detail-resolver.service";
import {RecipeDetailComponent} from "./recipe-book/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";

const appRoutes: Routes =[
  { path: '', redirectTo: '/recipe-book', pathMatch: 'full'},
  {
    path: 'recipe-book',
    component: RecipeBookComponent,
    children: [
      {
        path: 'details/:id',
        component: RecipeDetailComponent,
        resolve: {recipe: RecipeDetailResolverService}
      },
      {
        path: 'details/:id/edit',
        component: RecipeEditComponent
      },
      {
        path: 'new',
        component: RecipeEditComponent
      }
    ]
  },
  {
    path: 'recipe-list',
    component: RecipeListComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    [RouterModule]
  ]
})
export class AppRoutingModule {

}
