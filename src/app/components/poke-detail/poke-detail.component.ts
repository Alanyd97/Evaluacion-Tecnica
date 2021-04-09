import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { PokemonResume } from 'src/app/models/pokemon-resume.model';
import { PokeDetailService } from 'src/app/services/poke-detail/poke-detail.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {
  private poke_list: PokemonResume[] = this.poke_service.pokemons;
  private pokemon_current: PokemonResume;

  constructor(private poke_detail_service: PokeDetailService, private poke_service: PokemonService, private route: ActivatedRoute) {
  
   }

  ngOnInit(): void {
    let id;
    this.route.paramMap.subscribe(params => {
      id = params.get('id');
    });
    this.poke_list.forEach(pokemon => {
      if(pokemon.id = id){
        this.pokemon_current = pokemon;
      }
    });
    this.getPokemons();
    this.poke_service.updateCurrent(this.pokemon_current);
  }
  
  getPokemons(){
    return this.poke_service.getPokemons$().subscribe(pokemons =>{
      this.poke_list = pokemons;
    });
  }

  getCurrent(){
    return this.poke_service.pokemon_current$;
      
  }

}
