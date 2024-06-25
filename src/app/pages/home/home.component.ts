import { EstadoService } from './../../core/services/estado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private serviceEstado: EstadoService) { }
  ngOnInit(): void {
    this.serviceEstado.listar().subscribe({
      next: result => {
        console.log(result);
      },
      error: err => {
        console.error(err);
      }
    })
  }
}
