import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from "../shared/ingredients.model";


@Injectable({
    providedIn: 'root'
})

export class ShoppingListService {
    onAddIngredient = new Subject<Ingredients[]>();
    ingredients: Ingredients[] = [
        new Ingredients('Oranges', 14),
        new Ingredients('Pineapple', 1)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addedItem(shoppingItem: Ingredients) {
        this.ingredients.push(new Ingredients(shoppingItem.name, shoppingItem.amount));
        this.onAddIngredient.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredients[]){
        this.ingredients.push(...ingredients);
        this.onAddIngredient.next(this.ingredients.slice());

    }

    constructor(){}

    

}