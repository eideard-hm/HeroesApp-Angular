import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, tap, of, map } from 'rxjs';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  private _userAuth: Auth | undefined;

  constructor(private readonly http: HttpClient) { }

  get getUserAuth(): Auth {
    return { ...this._userAuth! };
  }

  checkAuth(): Observable<boolean>{
    if(!localStorage.getItem('userAuth')){
      return of(false);
    }

    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
    .pipe(
      map(userAuth => {
        this._userAuth = userAuth;
        return true;
      })
    )

  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(user => this._userAuth = user),
        tap(userAuth => localStorage.setItem('userAuth', JSON.stringify(userAuth.id)))
      )
  }
}
