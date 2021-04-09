import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResume } from '../../models/pokemon-resume.model';
import { Observable, Subject } from 'rxjs';
import { PokeDetailService } from '../poke-detail/poke-detail.service';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public pokemons: PokemonResume[]= [
    {
      id: 1,
      name: "aa",
      type: ["aa", "aa"], 
      level: 2,
    },  
    {
      id: 2,
      name: "bb",
      type: ["b", "b"], 
      level: 2,
    },  
    {
      id: 3,
      name: "c",
      type: ["c", "c"], 
      level: 2,
    },
  ]
  private pokemons$:Subject<PokemonResume[]>
  private pokemon_current: PokemonResume;
  pokemon_current$: Subject<PokemonResume>

  constructor(poke_detail_service:PokeDetailService) {
    this.pokemon_current$ = new Subject();
    this.pokemons$ = new Subject()
   }

  updateCurrent(poke:PokemonResume){
    this.pokemon_current = poke;
    this.pokemon_current$.next(this.pokemon_current);
  }

  addPokemon(poke:PokemonResume){
    this.pokemons.push(poke);
    this.pokemons$.next(this.pokemons);
  }

  getPokemons$():Observable<PokemonResume[]>{
    return this.pokemons$.asObservable();
  }
  getPokemonCurrent$():Observable<PokemonResume>{
    return this.pokemon_current$.asObservable();
  }
}
