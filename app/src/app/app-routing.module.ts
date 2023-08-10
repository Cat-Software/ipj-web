import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { NovoMembroComponent } from './pages/controle-usuario/novo-membro/novo-membro.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
  {
    path: 'controle-usuario/novo-membro',
    component: NovoMembroComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
