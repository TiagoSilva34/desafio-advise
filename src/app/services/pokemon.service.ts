import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPokemon } from 'src/app/IPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = `${environment.baseUrl}pokemon/?offset=10&limit=20`
  constructor(private http: HttpClient) { }

  get(): Observable<IPokemon> {
    return this.http.get<IPokemon>(this.apiUrl)
  }

  search(name: string): Observable<IPokemon[]> {
    return this.http.get<IPokemon[]>(`${this.apiUrl}/${name}`)
  }
}
