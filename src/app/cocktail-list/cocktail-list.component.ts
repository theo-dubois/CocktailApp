import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from '../classes/cocktail';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  cocktails!: Array<Cocktail>;
  subscription! : Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.subscription = this.dataService.getContacts().subscribe(

        (data: any) =>
            {
              console.log(data);
                this.cocktails = data;
            }
    );
}

}
