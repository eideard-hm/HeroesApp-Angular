import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroes } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [`
   mat-spinner{
     width: 100px;
     height: 100px;
   }
  `]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  heroes: Heroes[] = [];
  heroeSeleccionado : Heroes | undefined;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  buscando() {
    this.heroesService.getSugerencia(this.termino.trim())
      .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(e: MatAutocompleteSelectedEvent) {

    if (!e.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    }

    const heroe: Heroes = e.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe);
  }

}
