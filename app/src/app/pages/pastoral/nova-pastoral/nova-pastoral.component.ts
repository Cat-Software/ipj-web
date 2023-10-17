import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { PastoralRequest } from 'src/app/models/requests/pastoral.request.model';
import { PastoralService } from 'src/app/services/pastoral-service/pastoral.service';

@Component({
  templateUrl: './nova-pastoral.component.html',
  styleUrls: ['./nova-pastoral.component.css'],
})
export class NovaPastoral {
  salvo: boolean = false;
  pastoral: PastoralRequest = {
    titulo: '',
    subtitulo: '',
    descricao: '',
    autor: '',
    conteudo: '',
    usuario: ''
  };

  public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '25rem',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };

  constructor(private pastoralService: PastoralService) {}

  salvar() {
    this.pastoralService.salvar(this.pastoral).subscribe((value) => {
      console.log(value);
      this.salvo = true;
    });
  }
}
