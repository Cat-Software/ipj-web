import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo-membro',
  templateUrl: './novo-membro.component.html',
  styleUrls: ['./novo-membro.component.css'],
})
export class NovoMembroComponent {
  informacoesBasicas = this._formBuilder.group({
    nomeCompleto: ['', Validators.required],
    email: ['', Validators.required],
    nomeUsuario: ['', Validators.required],
    cargo: [''],
    cargoPrincipal: [''],
  });
  detalhes = this._formBuilder.group({
    endereco: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    membroDesde: ['', Validators.required],
    estadoCivil: ['', Validators.required],
    fotoPerfil: ['', Validators.required],
  });
  isLinear = false;

  papeis: any[] = [
    { value: 'Pastor' },
    { value: 'Pastor Auxiliar' },
    { value: 'Presbitero' },
    { value: 'Diacono' },
    { value: 'Secretario' },
    { value: 'Tesoureiro' },
    { value: 'Lider de Louvor' },
    { value: 'Lider de Jovens' },
    { value: 'Lider de Adolescentes' },
    { value: 'Professor(a) Jovens' },
    { value: 'Professor(a) Adolescentes' },
    { value: 'Professor(a) Ministerio Infantil' },
  ];

  papeisFiltrados: any[] = [];
  cargosEscolhidos: any[] = [];

  constructor(private _formBuilder: FormBuilder) {
    this.papeisFiltrados = this.papeis;
  }

  public criarNomeUsuario(): void {
    const nomeCompleto = this.informacoesBasicas.get('nomeCompleto')?.value;
    const nomeCompletoArr = nomeCompleto?.split(' ');

    const possiveisNomeUsuario: string[] = [];

    // Nome inicial e restante das iniciais de cada nome
    let nomeUsuarioAux = nomeCompletoArr![0] + '.';
    for(let idx = 1; idx < nomeCompletoArr!?.length; idx++) {
      nomeUsuarioAux += nomeCompletoArr![idx].charAt(0);
    }

    possiveisNomeUsuario.push(nomeUsuarioAux.toLocaleLowerCase());

    // Nome e sobrenome
    nomeUsuarioAux = nomeCompletoArr![0] + '.' + nomeCompletoArr![nomeCompletoArr!?.length - 1]
    possiveisNomeUsuario.push(nomeUsuarioAux.toLocaleLowerCase());

    // Nome e sobrenome reverso
    nomeUsuarioAux = nomeCompletoArr![nomeCompletoArr!?.length - 1] + '.' + nomeCompletoArr![0]
    possiveisNomeUsuario.push(nomeUsuarioAux.toLocaleLowerCase());

    // Nome inicial e restante das iniciais de cada nome invertidas
    nomeUsuarioAux = nomeCompletoArr![0] + '.';
    for(let idx = nomeCompletoArr!?.length - 1; idx >= 1; idx--) {
      nomeUsuarioAux += nomeCompletoArr![idx].charAt(0);
    }
    possiveisNomeUsuario.push(nomeUsuarioAux.toLocaleLowerCase());
    console.log(possiveisNomeUsuario);

    this.informacoesBasicas.get('nomeUsuario')?.setValue(nomeUsuarioAux.toLowerCase());
  }

  public filtrarCargo(): void {
    const valor: string | null | undefined =
      this.informacoesBasicas.get('cargo')?.value;
    if (valor) {
      const filtrado = this.papeis.filter((papel) =>
        papel.value.toLowerCase().includes(valor.toLowerCase())
      );
      this.papeisFiltrados = filtrado;
    } else {
      this.papeisFiltrados = this.papeis;
    }
  }

  public adicionarCargo(): void {
    const carg = this.informacoesBasicas.get('cargo');
    if(this.cargosEscolhidos.indexOf(carg?.value) === -1) {
      this.cargosEscolhidos.push(carg?.value);
      this.informacoesBasicas.get('cargo')?.reset()
      this.papeisFiltrados = [];
    }
  }

  public removerCargo(cargo: any): void {
    const idx = this.cargosEscolhidos.indexOf(cargo);
    this.cargosEscolhidos.splice(idx, 1);

    if(cargo == this.informacoesBasicas.get('cargoPrincipal')?.value) {
      this.informacoesBasicas.get('cargoPrincipal')?.reset();
    }
  }

}
