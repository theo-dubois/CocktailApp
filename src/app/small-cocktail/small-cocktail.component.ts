import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-small-cocktail',
  templateUrl: './small-cocktail.component.html',
  styleUrls: ['./small-cocktail.component.css']
})
export class SmallCocktailComponent implements OnInit {
  @Input() cocktail!:Cocktail;

  constructor() { }

  ngOnInit(): void {
  }
}
