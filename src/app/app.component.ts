import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstAngular';


  blanc() {
    document.querySelector('body').classList.add('blanc');
  }

  bleu() {
    document.querySelector('body').classList.add('bleu');
  }

  jaune() {
    document.querySelector('body').classList.add('jaune');
  }

  vert() {
    document.querySelector('body').classList.add('vert');
  }
}
