import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
  letters: Array<string> = new Array();

    constructor(
        private dataService: DataService,
        private route: ActivatedRoute) { }

  ngOnInit(): void {
    for(let i=1; i<=26; i++) {
        this.letters.push(String.fromCharCode(i+64));
    }
    // this.route.params.subscribe(paramsId => {
    //   let letter = paramsId.letter;
    //   if(! letter){
    //     letter = 'A';
    //   }
    //   this.search(letter)
    // });

    // Version + élégante :
    this.subscription = this.route.params.pipe(
        map(params => params.letter != null ? params.letter : String.fromCharCode(Math.floor(Math.random() * 26) + 65)),
        switchMap(letter => this.dataService.searchCocktails(letter))
    ).subscribe(
        cocktails => this.cocktails = cocktails
    )
  }

  search(letter: string) {
    this.subscription = this.dataService.searchCocktails(letter).subscribe(
      (data: any) => this.cocktails = data
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
