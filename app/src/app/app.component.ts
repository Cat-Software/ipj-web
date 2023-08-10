import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario-service/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private usuarioService: UsuarioService) {}

  public logado(): boolean {
    return this.usuarioService.logado;
  }

  public desconectar(): void {
    this.usuarioService.deslogar();
  }
}
