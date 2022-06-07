import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "./../models/pokemon.model"
import { PokemonList } from "./../models/pokemon.list"
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) { }



  getPokemonList(offset: number, limit: number = 60): Observable<PokemonList[]> {
    return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
      .pipe(
        map((x: any) => x.results)
      );
  }

  getPokemonDetail(pokemon: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + 'pokemon/' + pokemon);
  }

}


