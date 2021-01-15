import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoTextComponent } from "./info-text/info-text.component";
import { RecipeDetailedComponent } from "./recipes/recipe-detailed/recipe-detailed.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children:[
        {path:'', component:InfoTextComponent},
        {path:'new', component: RecipesEditComponent},
        {path:':id', component:RecipeDetailedComponent},
        {path: ':id/edit', component: RecipesEditComponent},
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/recipes', pathMatch:'full' },
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}