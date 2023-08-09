import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { UsuarioService } from '../usuario-service/usuario.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = this.usuarioService.obterTokenUsuario();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          token: `${token}`,
        },
      });

      return next.handle(request).pipe(catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.usuarioService.deslogar();
        }
        return throwError(() => new Error(error));
      }));
    }
    return next.handle(request);
  }
}
