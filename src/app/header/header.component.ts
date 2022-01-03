import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myLogo!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.myLogo = 'assets/images/cocktailicone.png';
  }
  open(letter:string):void{
    this.router.navigate(['']);
  }

}
