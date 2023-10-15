import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRequest } from 'src/app/models/requests/user.request.model';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  /**
   * Requisicao para autenticar o Usuario.
   *
   * @param userRequest UserRequest(nomeUsuario, senha)
   * @returns Observable<any>
   */
  public autenticar(userRequest: UserRequest): Observable<any> {
    return this.http.post(environment.authServer, userRequest, {
      headers: {
        'app-token': environment.appToken
      },
    });
  }
}
