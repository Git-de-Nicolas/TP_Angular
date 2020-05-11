import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  currDiv: string = 'A'; 
  // Chaqué article est "numéroté" par une lettre

  constructor() { }

  ngOnInit(): void {

  }

  ShowDiv(divVal: string) {
    this.currDiv = divVal;
  }

}
