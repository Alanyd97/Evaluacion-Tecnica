import { PokemonResume } from "./pokemon-resume.model";

export class Evolution extends PokemonResume{
    abilities: string[];
    constructor(id:number, name:string, type:string[],level:number, abilities: string[]){
        super(id, name, type,level);
        this.abilities = abilities;
    }
}