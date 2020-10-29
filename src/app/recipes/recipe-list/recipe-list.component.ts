import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[] = [
    new Recipes('Spagettin','Really delicious','https://img.cuisineaz.com/660x660/2013-12-20/i96114-spaghettis-curry.jpg'),
    new Recipes('Spagettin','Really delicious','https://img.cuisineaz.com/660x660/2013-12-20/i96114-spaghettis-curry.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
