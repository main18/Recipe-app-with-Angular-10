import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
  
export class ShoppingEditComponent implements OnInit {
  shoppingItem : Ingredients;
  @ViewChild("nameInput", {static: true}) name : ElementRef;
  @ViewChild("amountInput", {static: true}) amount: ElementRef;

  constructor(private slService: ShoppingListService) { }

  onAddItem(){
    this.shoppingItem = {name: this.name.nativeElement.value, amount: this.amount.nativeElement.value}
    this.slService.addedItem(this.shoppingItem);
  }

  ngOnInit(): void {
  }

}
