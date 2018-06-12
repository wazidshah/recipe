import { Component, OnInit } from '@angular/core';
import {ListService} from '../../services/listService/list.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private listService:ListService) { }

  ngOnInit() {
    this.listService.getList().subscribe(data=>console.log(data));
  }

}
