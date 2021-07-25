import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { UserService } from '../user.service';

@Component({
  selector: 'app-upload-account',
  templateUrl: './upload-account.component.html',
  styleUrls: ['./upload-account.component.css']
})
export class UploadAccountComponent implements OnInit {

  OneFile:File=null
  formUser : any;
  imageUrl: string = "";
  role :number;
  constructor(private userService : UserService,private route : ActivatedRoute,private _roter:Router) { 
    this.userService.roleEntity.subscribe(y => this.role = y)
  }

  ngOnInit(): void {
  this.route.params.pipe(
      pluck('id')
    ).subscribe(id=>{
      this.userService.GetUserById(id).subscribe(data=>{
        this.formUser = new FormGroup({
          id : new FormControl(data.id),
          userName : new FormControl(data.userName),
          emailId :new FormControl(data.emailId),
          password :new FormControl(data.password),
          avatar : new FormControl(data.avatar),
          phone : new FormControl(data.phone),
          dateOfBirth : new FormControl(data.dateOfBirth),
          adsress : new FormControl(data.adsress),
          nationality : new FormControl(data.nationality),
          role_id :new  FormControl(data.role_id.id),
        })
        this.imageUrl = "./../../../assets/images/"+data.avatar;
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
    this.userService.UpdateUser(this.formUser.value,this.formUser.value.id).subscribe(data=>{
      if(this.OneFile != null){
        this.userService.UploadFile(this.OneFile,data.id).subscribe(data=>{
          console.log(data);
        })

      }
      this.goToUserList();
    })

  }
  goToUserList(){
  this._roter.navigate(['/suaac'])
  }
}
