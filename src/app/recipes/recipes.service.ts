import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipes } from './recipes.model';

@Injectable({
    providedIn: 'root'
})

export class RecipesService{

    private recipes : Recipes[]  = [
        new Recipes('Green Bean Casserole I',
        'This pantry-clearing casserole calls for two cans of cut green beans',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F10%2F05%2F13660-Green-Bean-Casserole-I-Kala-Suttle-2000.jpg&w=1200&c=sc&poi=face&q=85',
        [
            new Ingredients('Meat',1),
            new Ingredients('Frensh Fries',20),
        ], 0),
        new Recipes('Slow Cooker Turkey Breast',
        'Slow Cooker Turkey Breast calls for only two ingredients',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F09%2F24%2F2596444-slow-cooker-turkey-breast-photo-by-lori-color-corrected.jpg&w=1200&c=sc&poi=face&q=85',
        [
            new Ingredients('breast',1),
            new Ingredients('brokoli',8),
        ], 1),
    ];

    getRecipes(){
        //returning the same exact copy of the same file.
        //slice with out arguments return a copy of the array
        return this.recipes.slice(); 
    }

    getRecipe(id:number){
        return this.recipes.find((recipe)=>{
            return recipe.id == id;
        })
    }

    addIngredientToShoppingList(ingredients : Ingredients[]){
        this.slService.addIngredients(ingredients);
    }

    constructor(private slService:ShoppingListService){}

}