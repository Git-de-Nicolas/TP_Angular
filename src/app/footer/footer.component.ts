import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  heure = new Date().toLocaleTimeString();

  constructor() {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.heure = new Date().toLocaleTimeString();
    }, 1000);
  }
}
