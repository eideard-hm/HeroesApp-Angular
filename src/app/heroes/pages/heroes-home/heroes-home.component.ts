import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
    `]
})
export class HeroesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
