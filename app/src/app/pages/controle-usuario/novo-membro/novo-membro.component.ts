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
    nomeUsuario: [{value: '', disabled: true}],
    cargo: ['']
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  papeis: any[] = [
    {value: 'Pastor'},
    {value: 'Pastor Auxiliar'},
    {value: 'Presbitero'},
    {value: 'Diacono'},
    {value: 'Secretario'},
    {value: 'Tesoureiro'},
    {value: 'Lider de Louvor'},
    {value: 'Lider de Jovens'},
    {value: 'Lider de Adolescentes'},
    {value: 'Professor(a) Jovens'},
    {value: 'Professor(a) Adolescentes'},
    {value: 'Professor(a) Ministerio Infantil'},
  ];

  papeisFiltrados: any[] = [];

  constructor(private _formBuilder: FormBuilder) {
    this.papeisFiltrados = this.papeis;
  }

  public filtrarCargo(): void {
    const valor: string | null | undefined = this.informacoesBasicas.get('cargo')?.value;
    if(valor) {
      const filtrado = this.papeis.filter(papel => papel.value.toLowerCase().includes(valor))
      this.papeisFiltrados = filtrado;
    } else {
      this.papeisFiltrados = this.papeis;
    }
  }
}
