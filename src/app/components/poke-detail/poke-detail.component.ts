
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { Pokemon } from 'src/app/models/pokemon.module';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {
  private poke_list: Pokemon[] = this.poke_service.pokemons;
  pokemon_current: Pokemon;

  constructor(private poke_service: PokemonService, private route: ActivatedRoute) {
  
   }

  ngOnInit(): void {
    let id;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });

    this.poke_list.forEach(pokemon => {
      if(pokemon.id == id){
        this.pokemon_current = pokemon;
      }
    });
  }


}
