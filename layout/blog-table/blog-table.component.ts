import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BlogModel } from '../../../app/blog-model';
import { BlogModelService } from '../../../app/blog-model.service';

@Component({
  selector: 'app-blog-table',
  templateUrl: './blog-table.component.html',
  styleUrls: ['./blog-table.component.css']
})
export class BlogTableComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  blog : BlogModel[]
  constructor(
    private blogService: 
    BlogModelService, 
    private router:Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      
    };
    this.blogService.GetBlog().subscribe(data =>{
      this.blog=data;
      console.log(data);
      this.dtTrigger.next();
    })
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  UpdateBlog(id:number){
    this.router.navigate(['blogupload',id])
  }
  deleteBlog(id:number){
this.blogService.DeleteBlog(id).subscribe(data=>{
  this.blogService.GetBlog().subscribe(data=>{
    this.blog=data.sort((a,b) => b.id - a.id);
    console.log(data);
  })
})
  }
  ViewBlog(id:number){
    this.router.navigate(['blogview',id])
  }

}
