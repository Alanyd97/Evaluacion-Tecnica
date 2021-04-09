import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.module';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  //en este caso el array es de prueba y esta publico,
  //deberia ser un observable que conecta con la api, el cual se actualiza y
  //actualiza al resto de los suscriptos
  public pokemons: Pokemon[] = [
    {
      id:1,
      name: "Bolbasour",
      types: ["aqua", " terra"],
      level:12,
      min_level:10,
      evolutions:[
        {
          id:112,
          name: "Ivyasour",
          types: ["aqua 1", " terra"],
          level:0,
          min_level:12,
          evolutions: null,
          image: "./../../../assets/images/ivyasour.png",
          abilities: ["aqua punch 1", "earth punch"]
        },
        {
          id:112,
          name: "Ivyasour",
          types: ["aqua 1", " terra"],
          level:0,
          min_level:121,
          evolutions: null,
          image: "./../../../assets/images/venusaur.png",
          abilities: ["aqua punch 1", "earth punch"]
        }
      ],
      image: "./../../../assets/images/bulbasur.png",
      abilities: ["aqua punch", "earth punch"]
    },
    {
      id:12,
      name: "Bulbasur 2",
      types: ["aqua", " terra"],
      level:13,
      min_level:10,
      evolutions:[
        {
          id:112,
          name: "Ivyasour",
          types: ["aqua 1", " terra"],
          level:0,
          min_level:12,
          evolutions: null,
          image: "./../../../assets/images/ivyasour.png",
          abilities: ["aqua punch 1", "earth punch"]
        },
        {
          id:112,
          name: "Ivyasour",
          types: ["aqua 1", " terra"],
          level:0,
          min_level:121,
          evolutions: null,
          image: "./../../../assets/images/venusaur.png",
          abilities: ["aqua punch 1", "earth punch"]
        }
      ],
      image: "./../../../assets/images/bulbasur.png",
      abilities: ["aqua punch", "earth punch"]
    }
  ]      
  constructor() {
   }

}
