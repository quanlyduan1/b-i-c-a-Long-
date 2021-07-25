import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from '../roles';
import { routerTransition } from '../router.animations';
import { User } from '../user';
import { UserModel } from '../user-model';
import { UserService } from '../user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    listRole: Roles[];
    selectedrole: number=2 ;
    imageUrl = '';
    user= new UserModel();
    OneFile:File=null
    constructor(private userService:UserService, private _roter:Router) { }
    
    ngOnInit(): void {
      this.AddRoles();
    }
    AddRoles(){
      this.userService.GetRole().subscribe(
        response => {
          this.listRole = response
        }
      );
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
    
    selectRoles (event){
      this.selectedrole = event.target.value;
    }
      
    Submit() {
      const registerData = {
        userName        : this.user.userName,
        emailId         : this.user.emailId,
        password        : this.user.password,
        phone           : this.user.phone,
        dateOfBirth     : this.user.dateOfBirth,
        adsress         : this.user.adsress,
        nationality     : this.user.nationality,
        role_id         : this.selectedrole
      }
      this.userService.SaveUser(registerData).subscribe(data => {
        this.userService.UploadFile(this.OneFile, data.id).subscribe(data => {
          console.log(data);
          this.goToUserList();
        })
  
      })
    }
    goToUserList(){
        this._roter.navigate(['/login'])
    }
}
