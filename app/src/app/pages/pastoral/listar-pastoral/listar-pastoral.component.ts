import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { PastoralResponse } from 'src/app/models/responses/pastoral.response.model';
import { PastoralService } from 'src/app/services/pastoral-service/pastoral.service';

@Component({
  templateUrl: './listar-pastoral.component.html',
  styleUrls: ['./listar-pastoral.component.css'],
})
export class ListarPastoral implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'selecoes',
    'titulo',
    'subtitulo',
    'descricao',
    'autor',
    'criadoEm',
    'publicadoEm',
    'publicacaoAtiva',
    'acoes',
  ];
  datasource: MatTableDataSource<PastoralResponse> =
    new MatTableDataSource<PastoralResponse>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  paginatorConfig: any = {
    length: 0,
    pageSize: 10,
    pageIndex: 0,
    pageSizeOptions: [5, 10, 25, 50, 100],
  };

  constructor(private _pastoralService: PastoralService) {}

  ngOnInit(): void {
    this._buscarPastorais(1, 10);
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((value) => {
      this._buscarPastorais(value.pageIndex + 1, value.pageSize);
    });
  }

  private _buscarPastorais(page: number, size: number) {
    const _self = this;
    const buildTable = this._buildTable;
    this._pastoralService.buscarTodas(page, size).subscribe(
      {
        next: (value) => buildTable(_self, value)
      }
    );
  }

  private _buildTable(self: any, value: any) {
    self.datasource.data = value.content;
    self.paginatorConfig.length = value.totalElements;
    self.paginatorConfig.pageSize = value.size;
    self.paginatorConfig.pageIndex = value.number;
  }
}
