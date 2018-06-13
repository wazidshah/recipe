import { Component, OnInit } from '@angular/core';
import {ListService} from '../../../services/listService/list.service';
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
private file:File;
private description:string="";
private ingridients:string="";
private errorMessage:string;
private errorShow:boolean=true;
  constructor(private listService:ListService) { }

  ngOnInit() {
    
  }

  fileChanged(event)
  {
    this.file = <File>event.target.files[0];
  }

  submit()
  {

    if(this.description.length<5)
    {
      console.log(this.file);
      this.errorMessage="Description Needs to be of atleast 5 characters";
      this.errorShow = false;
      setTimeout(()=>this.errorShow=true,3000);
      return;
    }

    if(this.ingridients.length<15)
    {
      this.errorMessage="Ingridients Needs to be of atleast 15 characters";
      this.errorShow = false;
      setTimeout(()=>this.errorShow=true,3000);
      return;
    }

    if(typeof this.file == "undefined")
    {
      this.errorMessage="Please Select Image";
      this.errorShow = false;
      setTimeout(()=>this.errorShow=true,3000);
      return;
    }
    


    let fd = new FormData();
    fd.append('image',this.file,this.file.name);
    this.listService.addImage(fd).subscribe(data=>{
          let recipe = {
              ingridients:this.ingridients,
              description:this.description,
              X_API_KEY:localStorage.getItem('recipeToken'),
              fileName:data
          }
          
          this.listService.addRecipe(recipe).subscribe(data=>{
            console.log(data);
            this.description="";
            this.ingridients="";
            this.file = null;
          })
    });
  }

}
