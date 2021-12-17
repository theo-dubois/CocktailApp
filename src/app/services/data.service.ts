import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from '../classes/cocktail';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCocktailsAlc(): Observable<Array<Cocktail>> {
    return this.http.get<Array<Cocktail>>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
      .pipe(
        map( (data: any) => data.drinks )
      );
}
  getCocktail(id :any): Observable<Array<Cocktail>> {
     return this.http.get<Array<Cocktail>>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
      .pipe(
      map( (data: any) => data.drinks )
    );
}
searchCocktails(query: string): Observable<Array<Cocktail>> {
  return this.http.get<Array<Cocktail>>('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + query)
  .pipe(
      map( (data: any) =>data.drinks ));
}
}
