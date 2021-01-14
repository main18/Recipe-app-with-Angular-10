import { EventEmitter, Injectable } from '@angular/core';
import { Recipes } from '../recipes/recipes.model';
import { RecipesService } from '../recipes/recipes.service';
import { Ingredients } from "../shared/ingredients.model";


@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    onAddIngredient = new EventEmitter<Ingredients[]>();
    ingredients: Ingredients[] = [
        new Ingredients('Oranges', 14),
        new Ingredients('Pineapple', 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addedItem(shoppingItem: Ingredients) {
        this.ingredients.push(new Ingredients(shoppingItem.name, shoppingItem.amount));
        this.onAddIngredient.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.onAddIngredient.emit(this.ingredients.slice());

    }

    constructor(){}

    

}