import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Observable } from 'rxjs';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
      mat-card {
        margin: 20px;
      }
  `]
})
export class ListadoComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe(heroe => this.heroes = heroe)
  }

}
