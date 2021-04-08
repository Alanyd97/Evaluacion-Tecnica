import { Component, OnInit } from '@angular/core';
import { PokemonResume } from 'src/app/models/pokemon-resume.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {
  
  
  pokeList:PokemonResume[];
  displayedColumns: string[];
  
  constructor(private pokeService: PokemonService, ) {}

  ngOnInit(): void {
    this.pokeList = this.getPokemons(); 
    this.displayedColumns = ['name', 'type', 'level'];
    console.log(this.pokeList);
    
    
  }

  getPokemons(){
    return this.pokeService.getPokemons();
  }

}
