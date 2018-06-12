import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }

  getList()
  {
    let request = {
      'X_API_KEY':localStorage.getItem('recipeToken')
    }
    return this.http.post('http://127.0.0.1:3000/recipe/getAll',request);
  }
}
