import { Pokemon, Type } from './../../models/pokemon.model';
import { PokemonList } from './../../models/pokemon.list';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor() { }

  @Input() pokemon: Pokemon;

  pokeType;

  ngOnInit(): void {
    this.filterType()

  }

  filterType() {
    this.pokeType = this.pokemon.types.find(obj => obj.type.name);
  }
}
