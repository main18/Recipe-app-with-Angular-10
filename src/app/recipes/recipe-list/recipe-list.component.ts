import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipes } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[];

  recipeDetails: Recipes;

  constructor(private recipeService : RecipesService, private router:Router, private route:ActivatedRoute) { }

  onClick(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
