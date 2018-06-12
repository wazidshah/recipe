import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { ListComponent } from './components/list/list.component'

const routes:Routes = [
  {path:"", component:LoginComponent},
  {path:"list", component:ListComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes);
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
