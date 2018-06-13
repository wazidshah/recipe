import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http:HttpClient) { }
//ec2-52-202-100-255.compute-1.amazonaws.com
  getList()
  {
    let request = {
      'X_API_KEY':localStorage.getItem('recipeToken')
    }
    return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/recipe/getAll',request);
  }

  addImage(fd:FormData)
  {
    return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/image/upload',fd);
  }

  addRecipe(data)
  {
    return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/recipe/add',data);
  }

  getComments()
  {
    let request = {
      'X_API_KEY':localStorage.getItem('recipeToken')
    }
    return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/recipe/getComments',request);
  }

  addComment(request)
  {
    return this.http.post('http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/recipe/comment',request)
  }
}
