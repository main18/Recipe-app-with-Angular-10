import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipes;

  constructor(private recipeService: RecipesService) { }

/*   onSelectRecipe() {
    this.recipeService.recipeDetails.emit(this.recipe);
  } */

  ngOnInit(): void {
  }

}
