import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PokemonResume } from '../models/pokemon-resume.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons: PokemonResume[] = [
    new PokemonResume("aa", ["aa", "aa"], 2),
    new PokemonResume("aa", ["aa", "aa"], 2),
    new PokemonResume("ss", ["ss", "ss"], 12)
  ]
  constructor(private http:HttpClient) { }

  getPokemons(){
    return this.pokemons;
  }
}
