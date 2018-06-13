import { Component, OnInit,Input,NgZone, OnChanges, SimpleChanges } from '@angular/core';
import {ListService} from '../../../services/listService/list.service';
@Component({
  selector: 'app-recipe-component',
  templateUrl: './recipe-component.component.html',
  styleUrls: ['./recipe-component.component.css']
})
export class RecipeComponentComponent implements OnInit,OnChanges {
@Input()id:string;
@Input()item:any;
@Input()commentsArray:any;
 imgSrc;
 description;
 ingridients;
 comment;
 comments=[];
  constructor(private ngzone:NgZone, private listeService:ListService) { }
  //ec2-52-202-100-255.compute-1.amazonaws.com
  ngOnInit() {
    this.imgSrc = 'http://ec2-52-202-100-255.compute-1.amazonaws.com:3000/'+this.item.path;
    this.description=this.item.description;
    this.ingridients = this.item.ingridients;
   
      for(let key in this.commentsArray)
      {
        if(this.commentsArray[key].r_id==this.id)
        {
         this.comments.push(this.commentsArray[key].comment);
        }
     
      }
   
  }


  ngOnChanges(changes: SimpleChanges)
  {
    this.commentsArray = changes.commentsArray.currentValue;
    for(let key in this.commentsArray)
      {
        if(this.commentsArray[key].r_id==this.id)
        {
         this.comments.push(this.commentsArray[key].comment);
        }
     
      }
  }

  addComment(event)
  {
    this.comments.unshift(this.comment);
    let request = {
      X_API_KEY:localStorage.getItem('recipeToken'),
      recipe_id:this.id,
      comment:this.comment
    }
    this.listeService.addComment(request)
    .subscribe((data)=>{
      console.log(data);
      this.comment="";
    })
  }


}
