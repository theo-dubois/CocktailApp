import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Cocktail } from '../classes/cocktail';

@Component({
  selector: 'app-cocktail-infos',
  templateUrl: './cocktail-infos.component.html',
  styleUrls: ['./cocktail-infos.component.css']
})
export class CocktailInfosComponent implements OnInit {
  @Input() cocktail!: Cocktail;
  @Input() id!:string;
  myLogoBlanc!:string;
  safeURL!: any;

  constructor(private sanitizer: DomSanitizer) { 
    
  }

  ngOnInit(): void {
    this.myLogoBlanc = 'assets/images/cocktailiconeblanc.png';

  }
  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.cocktail.strVideo);     
}
}
