import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';
import { Talk } from '../talk/talk';
import { TalkService } from '../talk/talk.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cmt-travel',
  templateUrl: './cmt-travel.component.html',
  styleUrls: ['./cmt-travel.component.css']
})
export class CmtTravelComponent implements OnInit {

  talk:Talk = new Talk();
  user:User
  talks:Talk[];
  constructor(
    private _srviceUser:UserService,
    private talkService:TalkService,
    private route:Router,
  ) { 
    this._srviceUser.userEntity.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.getAllTalk();
  }
  getAllTalk(){
    this.talkService.GetAllTalk().subscribe(data=>{
      this.talks = data
    }
      )
  }

  SaveTalk(){
    this.talkService.CreateTalk(this.talk).subscribe(data=>{
      console.log(data);
      this.GotoTalk();
    });
  }

  onSubmit(){``
  console.log(this.talk);
  this.SaveTalk()
}

  GotoTalk(){
    this.route.navigate(['/hometravel'])
  }

  onLoggedout() {
    localStorage.removeItem('emailID');
    localStorage.removeItem('role');
}

}
