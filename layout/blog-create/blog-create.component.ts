import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogModelService } from '../../../app/blog-model.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  formBlog= new FormGroup({
    placeName  :new FormControl(""),
    location  :new FormControl(""),
    companyName :new FormControl(""),
    status :new FormControl(""),
    introduce1 :new FormControl(""),
    introduce2 :new FormControl(""),
    emailCty :new FormControl(""),
    adsressCty :new FormControl(""),
    fareNumber :new FormControl(""),
    letterFare :new FormControl(""),
    image1:new FormControl(""),
    // image2:new FormControl(""),
    // image3:new FormControl(""),
  });

  OneFile:File=null
  imageUrl = '';
  constructor(private blogService:BlogModelService, private router:Router) { }

  ngOnInit(): void {
  }
  Selected(event){
    this.OneFile=event.target.files[0];
  }

  handleFileInput(file1:FileList){
    this.OneFile = file1.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.OneFile);
  }

  Submit(){
    this.blogService.SaveBlog(this.formBlog.value).subscribe(data=>{
      this.blogService.UploadFile(this.OneFile,data.id).subscribe(data=>{
        console.log(data);
        
        
      })
      this.goToUserList();
    })
  }
  goToUserList(){
    this.router.navigate(['/tables'])
  }


}
