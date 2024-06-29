import { EstadoService } from './../../../core/services/estado.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { Estado } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label!: string;
  @Input() iconePrefixo!: string;


  myControl = new FormControl('');
  options: Estado[] = [];
  filteredOptions: Observable<Estado[]> = new Observable<Estado[]>();

  constructor(private estadoService: EstadoService) {
  }


  ngOnInit(): void {

    this.estadoService.listar().subscribe(result => {
      this.options = result;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    });
  }
  private _filter(value: string): Estado[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.nome.toLowerCase().includes(filterValue) || option.sigla.toLowerCase().includes(filterValue));
  }
}
