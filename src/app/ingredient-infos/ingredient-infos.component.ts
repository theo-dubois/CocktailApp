import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../classes/cocktail';
import { Ingredient } from '../classes/ingredient';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ingredient-infos',
  templateUrl: './ingredient-infos.component.html',
  styleUrls: ['./ingredient-infos.component.css']
})
export class IngredientInfosComponent implements OnInit {
  @Input() ingredient!: Ingredient;
  @Input() id!:string;
  cocktails!: Array<Cocktail>;
  subscription! : Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.id)
    this.subscription = this.dataService.getCocktailsbyIngredient(this.id).subscribe(

      (data: any) =>
          {
            console.log(data);
              this.cocktails = data;
          }

  );
  }

}
