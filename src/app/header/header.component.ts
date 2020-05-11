import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titreDuSite:string = 'Angular - TP N°1 ';

  constructor() { }

  ngOnInit(): void {
  }

}
