import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-cocktail-infos',
  templateUrl: './cocktail-infos.component.html',
  styleUrls: ['./cocktail-infos.component.css']
})
export class CocktailInfosComponent implements OnInit {
  @Input() cocktail!: Cocktail;

  constructor() { }

  ngOnInit(): void {
}

}
