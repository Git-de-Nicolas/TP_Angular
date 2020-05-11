import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.component.html',
  styleUrls: ['./bienvenue.component.scss']
})
export class BienvenueComponent implements OnInit {

  msgBienvenue:string = "Bienvenue ! "

  isShow:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.isShow = !this.isShow;
  }


}
