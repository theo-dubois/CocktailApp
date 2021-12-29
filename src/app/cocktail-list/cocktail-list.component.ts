import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public checked: boolean=true;
  cocktails!: Array<Cocktail>;
  cocktailsFiltered!: Array<Cocktail>;
  subscription! : Subscription;
  searchForm!: FormGroup;
  searchControl!: FormControl;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.checked);
    this.searchControl = new FormControl('');
      this.searchForm = new FormGroup({
          search: this.searchControl
      });

    this.subscription = this.dataService.searchCocktails('').subscribe(

        (data: any) =>
            {
              console.log(data);
                this.cocktails = data;
            }

    );
    this.searchControl.valueChanges.pipe(
      debounceTime(100),
      mergeMap( data => this.dataService.searchCocktails(data))
  ).subscribe(
      (data: Array<Cocktail>) => {
          this.cocktails = data;
      }
  )
}
onChange(checked: boolean) {
  console.log(checked);
  if(this.checked){
    this.cocktails = this.cocktails.filter(p => p.strAlcoholic=='Alcoholic' || p.strAlcoholic=='Optional alcohol');
  }else{
    this.cocktails = this.cocktails.filter(p => p.strAlcoholic=='Non alcoholic' || p.strAlcoholic=='Optional alcohol');
  }

        }
      }
