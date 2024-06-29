import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Depoimento } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DepoimentoServiceService {

  private readonly urlApi: string = environment.apiUrl;

  constructor(private readonly httpClient: HttpClient) { }

  listar(): Observable<Depoimento[]> {
    return this.httpClient.get<Depoimento[]>(`${this.urlApi}/depoimentos`);
  }
}
