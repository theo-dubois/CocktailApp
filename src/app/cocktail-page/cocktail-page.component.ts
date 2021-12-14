import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  id!: string;

  constructor(private dataService: DataService,private route: ActivatedRoute) {
     this.route.params.subscribe( params => console.log(params) );
    }

  ngOnInit(): void {
    this.route.params.subscribe(paramsId => {
      this.id = paramsId.id;
      console.log(this.id);
    });
    this.subscription = this.dataService.getContact(this.id).subscribe(
      (data: any) =>
          {
            console.log(data);
              this.cocktail = data;
          }
  );
}

}
