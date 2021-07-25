import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogModel } from '../blog-model';
import { BlogModelService } from '../blog-model.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home-travel',
  templateUrl: './home-travel.component.html',
  styleUrls: ['./home-travel.component.css']
})
export class HomeTravelComponent implements OnInit {

  blog : BlogModel[];
  totalRecords:string;
  page: number= 1;
  user:User
  public sliders: Array<any> = [];
  constructor(
    private blogService: BlogModelService, 
    private router:Router,
    private _srviceUser:UserService
    ) { 
      this._srviceUser.userEntity.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
    this.blogService.GetBlog().subscribe(data =>{
      this.blog=data;
    })
  }

  ViewBlog(id:number){
    this.router.navigate(['detailstravel/blog',id])
  }
  
  onLoggedout() {
    localStorage.removeItem('emailID');
    localStorage.removeItem('role');
}

}
