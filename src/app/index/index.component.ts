import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit,OnDestroy{

  cocktails!: Array<Cocktail>;
  cocktailswith!: Array<Cocktail>;
  cocktailswithout!: Array<Cocktail>;
  subscription! : Subscription;
  public letter:string='C';
  searchForm!: FormGroup;
  searchControl!: FormControl;
  public checked: boolean=true;
  public checked1: boolean=false;
  alclabel!: string;
  filterlabel!: string;
  querry!: string;
  letters: Array<string> = new Array();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    for(let i=1; i<=26; i++) {
      this.letters.push(String.fromCharCode(i+64));
  }
    if(this.checked){
      this.alclabel ='With alcohol'
    }else{
      this.alclabel ='Without alcohol'
    }
      this.filterlabel ='Show filters';

    this.subscription = this.dataService.searchCocktails(this.letter).subscribe(
      (data: any) =>
          {
            this.cocktailswith = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
      this.cocktailswithout = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
            if(this.checked==true){
              this.cocktails = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
            }if(this.checked==false){
              this.cocktails = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
            }
          }
  );
  this.searchControl = new FormControl('');
  this.searchForm = new FormGroup({
      search: this.searchControl
  });
this.searchControl.valueChanges.pipe(
  debounceTime(100),
  mergeMap( data => this.dataService.searchCocktails(data))
).subscribe(
  (data: Array<Cocktail>) => {
    if (data.length > 0) {
      this.cocktails = data;
      this.cocktailswith = data.filter(cocktail => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
      this.cocktailswithout = data.filter(cocktail => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
    }
  }
)
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  open(letter:string):void{
    //this.router.navigate(['/index/', letter]);
    this.subscription = this.dataService.searchCocktails(letter).subscribe(

      (data: any) =>
          {
            console.log(data);
            this.cocktailswith = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
      this.cocktailswithout = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
            if(this.checked==true){
              this.cocktails = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
            }if(this.checked==false){
              this.cocktails = data.filter((cocktail: { strAlcoholic: string; }) => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
            }
          }
  );
}
onChange(checked: boolean) {
  this.checked=checked;
  if(checked==false){
    this.alclabel='Without alcohol';
    this.cocktails = this.cocktailswithout;
  }
  if(checked==true){
    this.alclabel='With alcohol';
    this.cocktails = this.cocktailswith;
  }
}
onChange2(checked2: boolean) {
  this.checked1=checked2;
  if(checked2==false){
    this.filterlabel='Show filters';
  }
  if(checked2==true){
    this.filterlabel='Hide filters';
  }
}
}
