import { Injectable, OnInit } from '@angular/core';
import { PokemonDetail } from 'src/app/models/pokemon-detail.model';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';
import { ActivatedRoute } from "@angular/router";
import { PokemonResume } from 'src/app/models/pokemon-resume.model';

@Injectable({
  providedIn: 'root'
})
export class PokeDetailService implements OnInit {
  poke_details: PokemonDetail[]=[
    new PokemonDetail("", null, 1),
    new PokemonDetail("", null, 2),
    new PokemonDetail("", null, 3),
  ]

  poke_detail_actual:PokemonDetail;
  poke_resume_actual:PokemonResume;

  constructor() {}
  
  ngOnInit(){

  }


  

}
