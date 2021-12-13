import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myLogoBlanc!: string;

  constructor() { }

  ngOnInit(): void {
    this.myLogoBlanc = 'assets/images/cocktailiconeblanc.png';
  }

}

