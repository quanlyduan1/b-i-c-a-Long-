import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    user = new User();
    msg = '';
      constructor(private _userService :UserService, private _roter :Router) {
        if (this._userService.userValue) {
          this._roter.navigate(['/dashboard']);
         }
       }
    
      ngOnInit(): void {
      }
    
      loginUser(){
        this._userService.LoginUser(this.user).subscribe(data=>{
          console.log("reponse recieved")
          this._roter.navigate(["/dashboard"]);
          if(typeof(Storage)!=="undefined"){
            localStorage.setItem('emailID', JSON.stringify(this.user.emailId));
            JSON.parse(localStorage.getItem('emailID'));
            localStorage.setItem('role', JSON.stringify(data.role_id.id));
          } else {
            alert('Trình duyệt của bạn đã quá cũ. Hãy nâng cấp trình duyệt ngay!');
          }
    
        },
        error => {
          console.log("exception occuured");
          this.msg = "Bad credentails, please enter vaild email and password";
        }
        )
      }

}
