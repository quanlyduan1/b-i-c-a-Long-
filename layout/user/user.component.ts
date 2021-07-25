import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../../app/user';
import { UserService } from '../../../app/user.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User[]
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private userService : UserService, 
    private _roter :Router,
    private http:HttpClient
    ) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      
    };
    this.userService.GetUser().subscribe(data=>{
      this.user=data.sort((a,b) => b.id - a.id);
      console.log(data);
      this.dtTrigger.next();
    });

  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }


  UpdateUser(id:number){
    this._roter.navigate(['userupload',id])
  }
  deleteUser(id:number){
this.userService.DeleteUser(id).subscribe(data=>{
  this.userService.GetUser().subscribe(data=>{
    this.user=data.sort((a,b) => b.id - a.id);
    console.log(data);
  })
})
  }
}
