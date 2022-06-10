import { Component, Input, OnInit } from '@angular/core';

import { Pokemon, Type } from './../../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  constructor() {}

  @Input() pokemon: Pokemon;

  public pokeTypes: Type[] = [];
  public typeName: string[] = [];
  public pokeType;
  public i;
  private auxilarTypename: string;

  async ngOnInit() {
    this.filterType();
  }

  filterType() {
    this.pokeTypes = this.pokemon.types.filter((row) => row.type.name);
    this.pokeTypes.forEach((obj) => {
      this.auxilarTypename = obj.type.name;

      if (this.auxilarTypename) {
        this.typeName.push(this.auxilarTypename);
      }
    });

    //Usando na v1
    this.pokeType = this.pokemon.types.find((obj) => obj.type.name);
  }

  setClass(typeOne: string, typeTwo: string = null) {
    console.log('linha 40 - trigger');
    let checkarrayTypeOne;
    let checkarrayTypeTwo;
    if (typeTwo == null && this.typeName.length <= 1) {
      checkarrayTypeOne = this.typeName.filter((obj) => obj == typeOne).length;
    }
    if (typeTwo != null && this.typeName.length >= 1) {
      checkarrayTypeTwo = this.typeName.filter(
        (obj) => obj == typeOne || obj == typeTwo
      ).length;
    }
    if (checkarrayTypeOne || checkarrayTypeTwo) {
      return true;
    }
  }
}
