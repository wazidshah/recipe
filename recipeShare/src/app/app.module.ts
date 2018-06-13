import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AddRecipeComponent } from './components/addRecipe/add-recipe/add-recipe.component';
import { RecipeComponentComponent } from './components/recipecomponen/recipe-component/recipe-component.component';
import {AuthService} from './services/auth.service';

import {AuthGuard} from './guard/auth.guard';

const routes:Routes = [
  {path:"", component:LoginComponent},
  {path:"list", component:ListComponent,canActivate:[AuthGuard]},
  {path:"add",component:AddRecipeComponent,canActivate:[AuthGuard]}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AddRecipeComponent,
    RecipeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
