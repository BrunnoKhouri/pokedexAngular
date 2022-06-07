import { forkJoin, Observable } from 'rxjs';
import { PokemonList } from './../models/pokemon.list';
import { PokemonService } from './../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {


  pokemons: Pokemon[] = [];
  private offset: number = 0;
  isLoading: boolean;
  isLastPage = false;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPage(this.offset);
  }


  getPage(offset: number) {
    if (!this.isLoading && !this.isLastPage) {
      this.isLoading = true;
      this.pokemonService.getPokemonList(offset)
        .subscribe((list: PokemonList[]) => {
          if (list.length === 0) {
            this.isLastPage = true;
          }

          if (!this.isLastPage) {
            this.getPokemon(list);
          }
        });
    }
  }

  private getPokemon(list: PokemonList[]) {
    const arr: Observable<Pokemon>[] = [];
    list.map((value: PokemonList) => {
      arr.push(
        this.pokemonService.getPokemonDetail(value.name)
      );
    });

    forkJoin([...arr]).subscribe((pokemons: []) => {
      this.pokemons.push(...pokemons);
      this.offset += 20;
    })
  }

}
