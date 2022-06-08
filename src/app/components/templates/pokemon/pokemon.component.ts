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

  public pokeTypes: Type[] = [];
  public typeName: string[] = [];
  public pokeType;
  private auxilarTypename: string;

  ngOnInit(): void {
    console.log('Pokemon', this.pokemon);
    this.filterType();

  }

  filterType() {
    this.pokeTypes = this.pokemon.types.filter(row => row.type.name);
    this.pokeTypes.forEach(obj => {
      this.auxilarTypename = obj.type.name;
      console.log(' teste', this.auxilarTypename);

      if (this.auxilarTypename) {
        this.typeName.push(this.auxilarTypename);
        console.log('teste2', this.typeName);
      }
    });


    //Usando na v1
    this.pokeType = this.pokemon.types.find(obj => obj.type.name);
    console.log('typePokemon', this.pokeType);
  }

  setClass(typeOne: string, typeTwo: string = null) {
    let checkarrayTypeOne;
    let checkarrayTypeTwo;
    if (typeTwo == null && this.typeName.length <= 1) {
      checkarrayTypeOne = this.typeName.filter(obj => obj == typeOne).length;      
    }
    if (typeTwo != null && this.typeName.length >= 1) {
      checkarrayTypeTwo = this.typeName.filter(obj => obj == typeOne || obj == typeTwo).length;
    }
    if (checkarrayTypeOne || checkarrayTypeTwo) {
      return true;
    }    
  }
}
