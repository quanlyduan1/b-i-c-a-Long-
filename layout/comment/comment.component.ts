import { Component, OnInit } from '@angular/core';
import { Talk } from '../../../app/talk/talk';
import { TalkService } from '../../../app/talk/talk.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  talks:Talk[];
  constructor(
    private talkService:TalkService,
  ) { }

  ngOnInit(): void {
    this.getAllTalk();
  }

  getAllTalk(){
    this.talkService.GetAllTalk().subscribe(data=>{
      this.talks = data
    }
      )
  }

}
