import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styles: [],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  recipeDetail: Recipes;
  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeDetails.subscribe((recipe: Recipes) => {
      this.recipeDetail = recipe;
    });
  }

  recipeDetails(recipeData: Recipes) {
    this.recipeDetail = recipeData;
  }


}
