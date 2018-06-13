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
import { NotfoundComponent } from './components/invalidPath/notfound/notfound.component';

const routes:Routes = [
  {path:"", component:LoginComponent},
  {path:"list", component:ListComponent,canActivate:[AuthGuard]},
  {path:"add",component:AddRecipeComponent,canActivate:[AuthGuard]},
  {path:"**",component:NotfoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent,
    AddRecipeComponent,
    RecipeComponentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes,{ useHash: true })
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
