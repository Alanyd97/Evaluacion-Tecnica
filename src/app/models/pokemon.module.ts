
export class Pokemon{
    constructor(public id:number,public name:string,public  type: string[], public level:number, public min_level:number, public evolutions:Pokemon[], public image:string, public abilities:string[]){
    }
}

