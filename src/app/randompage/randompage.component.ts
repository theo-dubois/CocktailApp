import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-randompage',
  templateUrl: './randompage.component.html',
  styleUrls: ['./randompage.component.css']
})
export class RandompageComponent implements OnInit {

  cocktail!:Cocktail;
  subscription !:Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getCocktailRandom().subscribe(
      (data: any) =>
          {
            console.log(data);
              this.cocktail = data;
          }
  );
  }

}
