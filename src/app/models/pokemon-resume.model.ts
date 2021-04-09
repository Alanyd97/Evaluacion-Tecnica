export class PokemonResume{
    constructor(public id: number, public name : string, public type:string[],public level:number){
        this.id = id;
        this.name = name;
        this.type = type;
        this.level = level;
    }
    
}