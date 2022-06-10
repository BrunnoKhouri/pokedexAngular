import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './../models/pokemon.model';
import { PokemonList } from './../models/pokemon.list';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ClassType {
  name: string;
  required: [{ type1: string; type2?: string }];
}

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/';
  constructor(private http: HttpClient) {}

  getPokemonList(
    offset: number,
    limit: number = 30
  ): Observable<PokemonList[]> {
    return this.http
      .get<PokemonList[]>(
        this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit
      )
      .pipe(map((x: any) => x.results));
  }

  getPokemonDetail(pokemon: number | string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.baseUrl + 'pokemon/' + pokemon);
  }

  // ! MOCKUPS

  // * Para novas classes apenas acionar na lista abaixo;
  private listOfCardClass: Array<ClassType> = [
    { name: 'card-bug', required: [{ type1: 'bug' }] },
    { name: 'card-fire', required: [{ type1: 'fire' }] },
    { name: 'card-grass', required: [{ type1: 'grass' }] },
    { name: 'card-water', required: [{ type1: 'water' }] },
    { name: 'card-flying', required: [{ type1: 'flying' }] },
    { name: 'card-ground', required: [{ type1: 'ground' }] },
    { name: 'card-normal', required: [{ type1: 'normal' }] },
    { name: 'card-poison', required: [{ type1: 'poison' }] },
    { name: 'card-electric', required: [{ type1: 'electric' }] },
  ];

  // * Para novas classes apenas acionar na lista abaixo;
  private listOfMoldingClass: Array<ClassType> = [
    { name: 'bug', required: [{ type1: 'bug' }] },
    { name: 'fire', required: [{ type1: 'fire' }] },
    { name: 'fire-flying', required: [{ type1: 'fire', type2: 'flying' }] },
    { name: 'grass', required: [{ type1: 'grass' }] },
    { name: 'water', required: [{ type1: 'water' }] },
    { name: 'flying', required: [{ type1: 'flying' }] },
    { name: 'ground', required: [{ type1: 'ground' }] },
    { name: 'normal', required: [{ type1: 'normal' }] },
    { name: 'poison', required: [{ type1: 'poison' }] },
    { name: 'electric', required: [{ type1: 'electric' }] },
  ];

  // GET's

  public getListOfCardClass(): Array<ClassType> {
    return this.listOfCardClass;
  }

  public getListOfMoldingClass(): Array<ClassType> {
    return this.listOfMoldingClass;
  }
}
