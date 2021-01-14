import { Ingredients } from '../shared/ingredients.model';

export class Recipes{
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredients : Ingredients[];
    public id : number;
    constructor(name:string, description:string, imagePath:string, ingredients: Ingredients[], id:number){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
        this.id = id;
    }
}