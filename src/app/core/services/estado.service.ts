import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estado } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiUrl: string = environment.apiUrl;


  constructor(private httpclient: HttpClient) { }


  listar(): Observable<Estado[]> {
    return this.httpclient.get<Estado[]>(`${this.apiUrl}/estados`)
  }
}
