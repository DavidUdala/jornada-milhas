import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, share, shareReplay } from 'rxjs';
import { Estado } from '../types/types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  private apiUrl: string = environment.apiUrl;
  private cache$?: Observable<Estado[]>;

  constructor(private httpclient: HttpClient) { }


  listar(): Observable<Estado[]> {
    if (!this.cache$) {
      this.cache$ = this.httpclient.get<Estado[]>(`${this.apiUrl}/estados`)
      .pipe(shareReplay(1));
    }
    return this.cache$;
  }
}
