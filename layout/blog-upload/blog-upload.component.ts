import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { BlogModelService } from '../../../app/blog-model.service';

@Component({
  selector: 'app-blog-upload',
  templateUrl: './blog-upload.component.html',
  styleUrls: ['./blog-upload.component.css']
})
export class BlogUploadComponent implements OnInit {

  OneFile:File=null
  formBlog : any;
  imageUrl:string = "";
  constructor(
    private blogService : BlogModelService, private router: Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      pluck('id')
    ).subscribe(id =>{
      this.blogService.GetBlogById(id).subscribe(data =>{
        this.formBlog = new FormGroup({
          id: new FormControl(data.id),
          placeName  :new FormControl(data.placeName),
          location  :new FormControl(data.location),
          companyName :new FormControl(data.companyName),
          status :new FormControl(data.status),
          introduce1 :new FormControl(data.introduce1),
          introduce2 :new FormControl(data.introduce2),
          emailCty :new FormControl(data.emailCty),
          adsressCty :new FormControl(data.adsressCty),
          fareNumber :new FormControl(data.fareNumber),
          letterFare :new FormControl(data.letterFare),
          image1 :new FormControl(data.image1)
        })
        this.imageUrl = "./../../../assets/images/"+ data.image1
      })
    })
  }

  Selected(event){
    this.OneFile=event.target.files[0];
  }

  handleFileInput(file:FileList){
    this.OneFile = file.item(0);
  
    var reader = new FileReader();
    reader.onload = (event:any) =>{
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.OneFile);
  }


  Submit(){
    this.blogService.UpdatBlog(this.formBlog.value,this.formBlog.value.id).subscribe(data=>{
      if(this.OneFile != null){
        this.blogService.UploadFile(this.OneFile,data.id).subscribe(data=>{
          console.log(data);
        })

      }
      this.goToUserList();
    })

  }
  goToUserList(){
  this.router.navigate(['/tables'])
  }

}
