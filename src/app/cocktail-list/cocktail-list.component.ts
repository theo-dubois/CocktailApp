import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, mergeMap } from 'rxjs/operators';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit,OnDestroy {

  @Input() letter!:string;
  public checked: boolean=true;
  public checked1: boolean=false;
  @Input() cocktails!: Array<Cocktail>;
  cocktailsFiltered!: Array<Cocktail>;
  subscription! : Subscription;
  searchForm!: FormGroup;
  searchControl!: FormControl;
  alclabel!: string;
  filterlabel!: string;

  constructor(private dataService: DataService,private router: Router) { }

  ngOnInit(): void {
    if(this.checked){
      this.alclabel ='With alcohol'
    }else{
      this.alclabel ='Without alcohol'
    }
      this.filterlabel ='Show filters';
    this.searchControl = new FormControl('');
      this.searchForm = new FormGroup({
          search: this.searchControl
      });
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
ngOnDestroy(): void {
  //this.subscription.unsubscribe();
}
onChange(checked: boolean) {
  this.checked=checked;
  if(checked==false){
    this.alclabel='Without alcohol';
  }
  if(checked==true){
    this.alclabel='With alcohol';
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

