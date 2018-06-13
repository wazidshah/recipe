import { Component, OnInit,Renderer2,ViewChild,ElementRef } from '@angular/core';
import {ListService} from '../../services/listService/list.service';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private list;
  private comments;
  private comment;
  constructor(private listService:ListService) { }
  
  ngOnInit() {
    this.listService.getList().subscribe(data=>{
      this.list=data;
    });

    this.listService.getComments()
    .subscribe(data=>{
        this.comments = data;
        console.log(this.comments);
    });
  }


  addComment(event)
  {
    let commentId = event.id.split('_')[1];
    this.comments.unshift({r_id: commentId, comment: this.comment});
    
  }

logout()
{
  localStorage.removeItem('recipeToken');
  window.location.reload();
}

}
