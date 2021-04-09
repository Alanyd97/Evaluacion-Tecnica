import { Evolution } from "./pokemon-evolution.module";

export class PokemonDetail{
    static id_actual:number = 0;
    id:number;
    id_pokemon:number;
    image_src:string;
    evolutions: Evolution[];
    constructor(image:string, evolutions: Evolution[], poke_id:number ){
        this.id= PokemonDetail.id_actual;
        PokemonDetail.id_actual++;
        this.id_pokemon = poke_id;
        this.image_src = image;
        this.evolutions = evolutions;
    }
    
}
