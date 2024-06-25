import { Component, OnInit, Output } from '@angular/core';
import { PromocaoService } from 'src/app/core/services/promocao.service';
import { Promocao } from 'src/app/core/types/types';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.scss']
})
export class PromocoesComponent implements OnInit {
  @Output() promocoes: Promocao[] = [];

  constructor(
    private servicePromocao: PromocaoService
  ) { }

  ngOnInit(): void {
    this.servicePromocao.listar().subscribe({
      next: result => {
        console.log(result);
        this.promocoes = result;
      },
      error: err => {
        console.error(err);
      }
    });
  }
}
