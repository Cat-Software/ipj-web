import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  constructor(private usuarioService: UsuarioService) {}

  public desconectar(): void {
    this.usuarioService.deslogar();
  }
}
