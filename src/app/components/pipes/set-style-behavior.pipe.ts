import { PokemonService } from './../services/pokemon.service';
import { Type } from './../models/pokemon.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setStyleBehavior',
})
export class SetStyleBehaviorPipe implements PipeTransform {
  private result;
  private getRulesOfArgs = [];

  constructor(private pokemonService: PokemonService) {}

  transform(args: Array<Type>, type: string): Promise<unknown> {
    switch (type) {
      case 'class-card':
        args.filter((a) => {
          this.getRulesOfArgs.push(a.type.name);
        });

        this.pokemonService.getListOfCardClass().forEach((obj) => {
          obj.required.filter((r) => {
            if (!r.type2) {
              this.getRulesOfArgs[0] == [r.type1][0]
                ? (this.result = obj.name)
                : '';
            }
          });
        });

        break;
      case 'class-molding':
        args.filter((a) => {
          this.getRulesOfArgs.push(a.type.name);
        });

        this.pokemonService.getListOfMoldingClass().forEach((obj) => {
          obj.required.filter((r) => {
            if (r.type2) {
              this.equals(this.getRulesOfArgs, [r.type1, r.type2])
                ? (this.result = obj.name)
                : '';
            } else {
              this.getRulesOfArgs[0] == [r.type1][0]
                ? (this.result = obj.name)
                : '';
            }
          });
        });

        break;
      default:
        console.log('You are breaking the code !');
        break;
    }
    return this.result;
  }

  // * Other exclusive functions
  private equals(arr1: any[], arr2: any[]): boolean {
    let result;
    arr1.length === arr2.length &&
      arr1.every((el, index) => {
        result = el === arr2[index];
      });
    return result;
  }
}

// 'card-grass',
// 'card-fire',
// 'card-water',
// 'card-poison',
// 'card-bug',
// 'card-flying',
// 'card-normal',
// 'card-electric',
// 'card-ground',
