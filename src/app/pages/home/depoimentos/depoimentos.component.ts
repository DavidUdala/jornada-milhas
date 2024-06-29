import { Component, OnInit } from '@angular/core';
import { DepoimentoServiceService } from 'src/app/core/services/depoimento-service.service';
import { Depoimento } from 'src/app/core/types/types';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {

  depoimentos: Depoimento[] = [];

  constructor(private readonly depoimentoservice: DepoimentoServiceService) { }
  ngOnInit(): void {
    this.depoimentoservice.listar().subscribe({
      next: response => {
        this.depoimentos = response;
      }, error: err => {
        console.error(err);
      }
    });
  }
}
