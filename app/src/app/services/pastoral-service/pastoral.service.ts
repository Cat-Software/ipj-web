import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PastoralRequest } from 'src/app/models/requests/pastoral.request.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PastoralService {
  constructor(private http: HttpClient) {}

  public salvar(pastoral: PastoralRequest): Observable<any> {
    var credenciais: any = JSON.parse(
      localStorage.getItem('credenciais') ?? ''
    );
    return this.http.post(`${environment.api}/pastoral/salvar`, pastoral, {
      headers: {
        Authorization: `Bearer ${credenciais.token}`,
        'app-token': environment.appToken,
      },
    });
  }

  public buscarPorUuid(uuid: string): Observable<any> {
    var credenciais: any = JSON.parse(
      localStorage.getItem('credenciais') ?? ''
    );
    return this.http.get(`${environment.api}/pastoral/${uuid}`, {
      headers: {
        Authorization: `Bearer ${credenciais.token}`,
        'app-token': environment.appToken,
      }
    });
  }

  public buscarTodas(page: number, size: number): Observable<any> {
    var credenciais: any = JSON.parse(
      localStorage.getItem('credenciais') ?? ''
    );
    return this.http.get(`${environment.api}/pastoral`, {
      headers: {
        Authorization: `Bearer ${credenciais.token}`,
        'app-token': environment.appToken,
      },
      params: { page: page, size: size },
    });
  }
}
