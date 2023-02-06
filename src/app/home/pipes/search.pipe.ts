import { Pipe, PipeTransform } from '@angular/core';
import { IPokemon } from 'src/app/models/pokemon-basic.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IPokemon[], ...args: string[]): IPokemon[] {
    return value.filter(pokemon => pokemon.name.includes(args[0]));
  }

}
