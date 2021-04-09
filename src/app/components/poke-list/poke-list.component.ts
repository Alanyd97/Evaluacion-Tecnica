import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.module';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  poke_list: Pokemon[] = this.poke_service.pokemons;
  displayed_columns: string[] = ['name', 'type', 'level'];
  
  constructor(private poke_service: PokemonService) {
  }

  ngOnInit(): void {
    this.poke_list = this.poke_service.pokemons;
  }


}
