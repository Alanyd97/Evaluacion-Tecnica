import { Component, OnInit } from '@angular/core';
import { PokemonResume } from 'src/app/models/pokemon-resume.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  poke_list: PokemonResume[] = this.poke_service.pokemons;
  displayed_columns: string[] = ['name', 'type', 'level'];
  
  constructor(private poke_service: PokemonService, ) {
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    return this.poke_service.getPokemons$().subscribe(pokemons =>{
      this.poke_list = pokemons;
    });
  }

}
