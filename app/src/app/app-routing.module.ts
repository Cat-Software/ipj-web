import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsuarioNaoAutenticadoGuard } from './services/guards/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/guards/usuario-autenticado.guard';
import { NovoMembroComponent } from './pages/controle-usuario/novo-membro/novo-membro.component';
import { NovaPastoral } from './pages/pastoral/nova-pastoral/nova-pastoral.component';
import { ListarPastoral } from './pages/pastoral/listar-pastoral/listar-pastoral.component';
import { EditarPastoral } from './pages/pastoral/editar-pastoral/editar-pastoral.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UsuarioAutenticadoGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'controle-usuario/novo-membro',
        component: NovoMembroComponent,
      },
      {
        path: 'pastoral',
        component: ListarPastoral,
      },
      {
        path: 'pastoral/nova-pastoral',
        component: NovaPastoral,
      },
      {
        path: 'pastoral/:uuid',
        component: EditarPastoral,
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
