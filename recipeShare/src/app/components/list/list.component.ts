import { Component, OnInit,NgZone } from '@angular/core';
import {ListService} from '../../services/listService/list.service';
import { forEach } from '@angular/router/src/utils/collection';
import {Router} from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list;
  comments;
  comment;
  constructor(private listService:ListService,private router:Router,private ngZone:NgZone) { }
  
  ngOnInit() {
    this.listService.getList().subscribe(data=>{
      this.list=data;
    });

    this.listService.getComments()
    .subscribe(data=>{
        this.ngZone.run(()=>{
          this.comments = data;
          console.log(this.comments);
        });
        
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
  this.router.navigate([""]);
}

}
