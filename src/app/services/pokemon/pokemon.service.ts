import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon.module';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons: Pokemon[] = [
    {
      id:1,
      name: "Bulbasur",
      type: ["aqua", " terra"],
      level:12,
      min_level:10,
      evolutions:[
        {
          id:112,
          name: "Bulbasur 1",
          type: ["aqua 1", " terra"],
          level:0,
          min_level:12,
          evolutions: null,
          image: "url",
          abilities: ["aqua punch 1", "earth punch"]
        }
      ],
      image: "url",
      abilities: ["aqua punch", "earth punch"]
    },
    {
      id:12,
      name: "Bulbasur 2",
      type: ["aqua", " terra"],
      level:13,
      min_level:10,
      evolutions:[
        {
          id:122,
          name: "Bulbasur 1",
          type: ["aqua 1", " terra"],
          level:0,
          min_level:12,
          evolutions: null,
          image: "url",
          abilities: ["aqua punch 1", "earth punch"]
        }
      ],
      image: "url",
      abilities: ["aqua punch", "earth punch"]
    }
  ]      //<<<<<---------------------

  private pokemon_current: Pokemon;

  constructor() {
   }

  updateCurrent(poke:Pokemon){
    this.pokemon_current = poke;
  }

  addPokemon(poke:Pokemon){
    this.pokemons.push(poke);
  }
}
