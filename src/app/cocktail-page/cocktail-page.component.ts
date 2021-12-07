import { Component, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cocktail-page',
  templateUrl: './cocktail-page.component.html',
  styleUrls: ['./cocktail-page.component.css']
})
export class CocktailPageComponent implements OnInit {
  cocktail!:Cocktail;
  subscription !:Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.subscription = this.dataService.getContact(11007).subscribe(
      (data: any) =>
          {
            console.log(data);
              this.cocktail = data;
          }
  );
}

}
