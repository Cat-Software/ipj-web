import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserRequest } from 'src/app/models/requests/user.request.model';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { UsuarioService } from 'src/app/services/usuario-service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'app';
  hide = true;

  nomeUsuario: FormControl = new FormControl('');
  senha: FormControl = new FormControl('');


  constructor(private usuarioService: UsuarioService, private snackBar: MatSnackBar) {}

  public entrar(): void {
    this.usuarioService.logar({ nomeUsuario: this.nomeUsuario.value, senha: this.senha.value })
      .subscribe({error: _ => {
        this.snackBar.open('Não foi possível entrar no sistema: Usuário ou Senha incorreto', 'fechar', {
          duration: 3000
        })
      }});
  }
}
