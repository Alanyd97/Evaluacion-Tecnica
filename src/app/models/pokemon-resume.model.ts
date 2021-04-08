export class PokemonResume{
    private static static_id = 0;
    public id;
    constructor(public name : string, public type:string[],public level:number){
        this.initId();
        this.name = name;
        this.type = type;
        this.level = level;
    }
    private initId(){
        this.id = PokemonResume.static_id +1;
        PokemonResume.static_id = this.id;
    }
}