import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailInfosComponent } from './cocktail-infos/cocktail-infos.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'cocktail/:id', component: CocktailPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
