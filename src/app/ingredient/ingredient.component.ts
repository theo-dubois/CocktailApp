import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() Ingredient!:string;
  @Input() Measure!:string;

  constructor() {}

  ngOnInit(): void {
  }
}
