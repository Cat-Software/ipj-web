import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserRequest } from 'src/app/models/requests/user.request.model';
import { AuthService } from '../auth-service/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  private _logado: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  public get logado(): boolean {
    return this._logado || localStorage.getItem('credenciais') != null;
  }

  public logar(userRequest: UserRequest) {
    return this.authService
      .autenticar(userRequest)
      .pipe(
        tap({
          next: (value) => {
            console.log('NEXT:', value);
            localStorage.setItem('credenciais', JSON.stringify(value));
            localStorage.setItem('usuario', userRequest.nomeUsuario.toString());
            this._logado = true;
            this.router.navigate(['']);
          },
          error: (error) => {
            console.log('ERROR:', error);
          }
        })
      );
  }

  public deslogar() {
    localStorage.clear();
    this._logado = false;
    this.router.navigate(['login']);
  }

  public obterTokenUsuario(): string | null {
    return localStorage.getItem('token');
  }
}
