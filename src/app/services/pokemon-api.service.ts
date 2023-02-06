import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IPokemon } from '../models/pokemon-basic.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {
  pokemonList = new BehaviorSubject<IPokemon[]>(null)

  constructor(
    private http: HttpClient
  ) { }

  getAllPokemonData(limit: number){
    this.http.get(`${environment.api}pokemon?limit=${limit}`)
    .pipe(tap((data: any) => {
      this.pokemonList.next(data.results)
    }))
    .subscribe()
  }

  getPokemon(id: string){
    return this.http.get(`${environment.api}pokemon/${id}`)
  }


}
