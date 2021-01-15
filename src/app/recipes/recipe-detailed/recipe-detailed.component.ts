import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detailed',
  templateUrl: './recipe-detailed.component.html',
  styleUrls: ['./recipe-detailed.component.css']
})
export class RecipeDetailedComponent implements OnInit {
  recipeDetail: Recipes;
  constructor(private slService: ShoppingListService, private recipeService: RecipesService, private router:Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    /*const id = +this.route.snapshot.params['id'];*/
    this.route.params.subscribe((param: Params) => {
      this.recipeDetail = this.recipeService.getRecipe(+param['id']);
    })
  }

  toShoppingList(recipeDetail: Recipes) {
    this.slService.addIngredients(recipeDetail.ingredients);
  }

  onClick(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }


}
