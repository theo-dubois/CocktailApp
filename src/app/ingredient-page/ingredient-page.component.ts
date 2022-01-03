import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from '../classes/ingredient';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-ingredient-page',
  templateUrl: './ingredient-page.component.html',
  styleUrls: ['./ingredient-page.component.css']
})
export class IngredientPageComponent implements OnInit {

  ingredient!: Ingredient;
  subscription !:Subscription;
  id!: string;

  constructor(private dataService: DataService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });
    this.subscription = this.dataService.getIngredient(this.id).subscribe(
      (data: any) =>
          {
            console.log(data);
              this.ingredient = data;
          }
  );
  }

}
