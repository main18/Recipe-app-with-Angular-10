import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']/* ,
  providers: [ShoppingListService] */
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];
  constructor(private shoopingListService: ShoppingListService) {
    
  }

  ngOnInit(): void {
    this.ingredients = this.shoopingListService.getIngredients();
    this.shoopingListService.onAddIngredient
      .subscribe((ingredients : Ingredients[]) => this.ingredients = ingredients);
  }

}
