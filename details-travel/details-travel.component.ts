import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from '../blog-model';
import { BlogModelService } from '../blog-model.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-details-travel',
  templateUrl: './details-travel.component.html',
  styleUrls: ['./details-travel.component.css']
})
export class DetailsTravelComponent implements OnInit {

  id:number;
  item:BlogModel;
  urlImage:string;
  user:User
  constructor(
    private blogService:BlogModelService,
    private route:ActivatedRoute,
    private _srviceUser:UserService
    ) { 
      this._srviceUser.userEntity.subscribe(x => this.user = x);
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = new BlogModel();
    this.blogService.GetBlogById(this.id).subscribe( data => {
      this.item=data;
        this.urlImage = "./../../../assets/images/" + data.image1;
      console.log(this.urlImage);

  }
    );
  }
  onLoggedout() {
    localStorage.removeItem('emailID');
    localStorage.removeItem('role');
}

}
