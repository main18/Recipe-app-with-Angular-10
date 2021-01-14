import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoTextComponent } from "./info-text/info-text.component";
import { RecipeDetailedComponent } from "./recipes/recipe-detailed/recipe-detailed.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

const appRoutes: Routes = [
    { path: 'recipes', component: RecipesComponent, children:[
        {path:':id', component:RecipeDetailedComponent},
        {path:'', component:InfoTextComponent},
    ] },
    { path: 'shopping-list', component: ShoppingEditComponent },
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