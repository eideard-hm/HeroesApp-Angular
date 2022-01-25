import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenHeroePipe implements PipeTransform {

  transform(heroe: Heroes): string {
    //  if(!heroe.alt_img){
    //    return './assets/img/no-image.png';
    //  }
    if (!heroe.id) {
      return './assets/img/no-image.png';
    }
    return `./assets/img/heroes/${heroe.id}.jpg`;
  }

}
