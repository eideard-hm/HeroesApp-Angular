import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styles: [`
    .container {
      margin: 10px;
    }
    `]
})
export class HeroesHomeComponent{

  constructor(private readonly router: Router,
              private readonly authService: AuthService) { }

  get getUserAuth(){
    return this.authService.getUserAuth;
  }

  logout(){
    this.router.navigate(['./auth/login']);
  }

}
