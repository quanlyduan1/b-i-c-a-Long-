import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from '../../../app/blog-model';
import { BlogModelService } from '../../../app/blog-model.service';

@Component({
  selector: 'app-blog-view-id',
  templateUrl: './blog-view-id.component.html',
  styleUrls: ['./blog-view-id.component.css']
})
export class BlogViewIdComponent implements OnInit {

  id:number;
  item:BlogModel;

  urlImage:string;
  constructor(private route:ActivatedRoute,
    private blogService:BlogModelService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.item = new BlogModel();
    this.blogService.GetBlogById(this.id).subscribe( data => {
      this.item=data;
        this.urlImage = "./../../../assets/images/" + data.image1;
      console.log(this.urlImage);
    });
  }

}
