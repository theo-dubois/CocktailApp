import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() Ingredient!:string;
  @Input() Measure!:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  open(id:any):void{
    this.router.navigate(['/ingredient/', id]);
  }

}
