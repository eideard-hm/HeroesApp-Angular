import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(heroe: Heroes): string {
    if (!heroe.id && !heroe.alt_img) {
      return './assets/img/no-image.png';
    }

    if(heroe.alt_img){
      return heroe.alt_img;
    }

    return `./assets/img/heroes/${heroe.id}.jpg`;
  }

}
