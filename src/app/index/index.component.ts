import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  constructor(private dataService: DataService,private router: Router) {}

  ngOnInit(): void {

    this.letter='A';
    this.subscription = this.dataService.searchCocktails(this.letter).subscribe(
      (data: any) =>
          {
            console.log(data);
              this.cocktails = data;
          }
  );
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

}
