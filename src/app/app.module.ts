import { NgModule} from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { CocktailPageComponent } from './cocktail-page/cocktail-page.component';
import { CocktailInfosComponent } from './cocktail-infos/cocktail-infos.component';
import { SearchComponent } from './search/search.component';
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CocktailListComponent,
    CocktailComponent,
    CocktailPageComponent,
    CocktailInfosComponent,
    SearchComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
