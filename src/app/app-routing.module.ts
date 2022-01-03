import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailInfosComponent } from './cocktail-infos/cocktail-infos.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { IndexComponent } from './index/index.component';
import { IngredientPageComponent } from './ingredient-page/ingredient-page.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { RandompageComponent } from './randompage/randompage.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'index/:letter', component: IndexComponent },
    { path: 'cocktail/:id', component: CocktailPageComponent },
    { path: 'random', component: RandompageComponent },
    { path: 'ingredient/:id', component: IngredientPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
