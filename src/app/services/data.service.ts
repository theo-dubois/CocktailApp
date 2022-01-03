import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from '../classes/cocktail';
import { environment } from 'src/environments/environment';
import { Ingredient } from '../classes/ingredient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getCocktail(id :any): Observable<Cocktail> {
     return this.http.get<Cocktail>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
      .pipe(
      map( (data: any) => data.drinks[0] )
    );
}
getCocktailsbyIngredient(name: string): Observable<Array<Cocktail>> {
  return this.http.get<Array<Cocktail>>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name)
  .pipe(
      map( (data: any) =>data.drinks ));
}
getIngredient(id :any): Observable<Ingredient> {
  return this.http.get<Ingredient>('https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+id)
   .pipe(
   map( (data: any) => data.ingredients[0] )
 );
}
getCocktailRandom(): Observable<Cocktail> {
  return this.http.get<Cocktail>('https://www.thecocktaildb.com/api/json/v1/1/random.php')
   .pipe(
   map( (data: any) => data.drinks[0] )
 );
}
searchCocktails(query: any): Observable<Array<Cocktail>> {
  return this.http.get<Array<Cocktail>>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query)
  .pipe(
      map( (data: any) =>data.drinks ));
}
}
