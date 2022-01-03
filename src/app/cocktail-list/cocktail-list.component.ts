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

  public checked: boolean=false;
  cocktails!: Array<Cocktail>;
  cocktailsFiltered!: Array<Cocktail>;
  subscription! : Subscription;
  searchForm!: FormGroup;
  searchControl!: FormControl;
  alclabel!: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    if(this.checked){
      this.alclabel ='With alcohol'
    }else{
      this.alclabel ='Without alcohol'
    }
    console.log(this.checked);
    this.searchControl = new FormControl('');
      this.searchForm = new FormGroup({
          search: this.searchControl
      });

    this.subscription = this.dataService.searchCocktails('B').subscribe(

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
        if(this.checked){
          this.cocktails = data.filter(cocktail => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
        }else{
          this.cocktails = data.filter(cocktail => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
        }
      }
  )
}
onChange(checked: boolean) {
  console.log(checked)
  this.checked=checked;
  if(checked==false){
    this.alclabel='Without alcohol'
  }
  if(checked==true)
  this.alclabel='With alcohol'
        }
      }
