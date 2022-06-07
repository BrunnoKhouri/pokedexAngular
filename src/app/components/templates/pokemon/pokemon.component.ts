import { Pokemon } from './../../models/pokemon.model';
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

  ngOnInit(): void {
  }

}
