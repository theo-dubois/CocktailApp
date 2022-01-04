import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-small-cocktail',
  templateUrl: './small-cocktail.component.html',
  styleUrls: ['./small-cocktail.component.css']
})
export class SmallCocktailComponent implements OnInit {
  @Input() cocktail!:Cocktail;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
}
