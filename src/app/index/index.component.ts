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
  subscription! : Subscription;
  public letter!:string;
  searchForm!: FormGroup;
  searchControl!: FormControl;
  public checked: boolean=true;
  public checked1: boolean=false;
  alclabel!: string;
  filterlabel!: string;

  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit(): void {
    if(this.checked){
      this.alclabel ='With alcohol'
    }else{
      this.alclabel ='Without alcohol'
    }
      this.filterlabel ='Show filters';
    this.letter='A';
    this.subscription = this.dataService.searchCocktails(this.letter).subscribe(
      (data: any) =>
          {
            console.log(data);
              this.cocktails = data;
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
    if(this.checked){
      this.cocktails = data.filter(cocktail => cocktail.strAlcoholic=='Alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
    }else{
      this.cocktails = data.filter(cocktail => cocktail.strAlcoholic=='Non alcoholic' || cocktail.strAlcoholic=='Optional alcohol');
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
              this.cocktails = data;
          }
  );
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
