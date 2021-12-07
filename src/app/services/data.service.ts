import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cocktail } from '../classes/cocktail';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Array<Cocktail>> {
    return this.http.get<Array<Cocktail>>('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
      .pipe(
        map( (data: any) => data.drinks )
      );
}
getContact(id :any): Observable<Cocktail> {
  return this.http.get<Cocktail>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
    .pipe(
      map( (data: any) => data.drinks )
    );
}
}
