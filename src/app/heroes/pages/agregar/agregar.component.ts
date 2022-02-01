import { Component, OnInit } from '@angular/core';
import { Heroes, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `
  ]
})
export class AgregarComponent implements OnInit {

  title: string = 'Nuevo';

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroes = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  constructor(private readonly heroesService: HeroesService,
              private readonly activeRoute: ActivatedRoute,
              private readonly router: Router,
              private readonly snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {

    if (this.router.url.includes('editar')) {

      this.title = 'Editar'

      this.activeRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroeById(id))
        )
        .subscribe({
          next: heroe => this.heroe = heroe,
          error: () => this.router.navigate(['/heroes/listado'])
        })
    }

  }

  save() {
    if (this.heroe.superhero.trim().length <= 1) {
      return;
    }

    //editar
    if (this.heroe.id) {
      this.heroesService.updateHeroe(this.heroe)
        .subscribe(heroe => this.showSnackBar(`Héroe ${heroe.superhero} actualizado.`));
      return;
    }

    //crear
    this.heroesService.saveHeroe(this.heroe)
      .subscribe(heroe => {
        this.router.navigate(['/heroes/editar', heroe.id])
        this.showSnackBar('Héroe actualizado.')
      })

  }

  delete(){
    if(this.heroe.id){
      this.heroesService.deleteHeroe(this.heroe.id!)
      .subscribe({
        next: res => console.log(res),
        error: () => this.router.navigate(['/heroes'])
      })
    }

    this.router.navigate(['/heroes']);
  }

  showSnackBar(msj: string){
    this.snackBar.open(msj, 'Ok!', {
      duration: 2500
    })
  }

}
