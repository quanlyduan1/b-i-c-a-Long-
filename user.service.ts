import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Roles } from './roles';
import { User } from './user';
import { UserModel } from './user-model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject: BehaviorSubject<User>;
  private roleSubject: BehaviorSubject<number>;
  public userEntity: Observable<User>;
  public roleEntity: Observable<number>;

  private baseURL = "http://localhost:8080/api/v1";

  constructor(
    private _http :HttpClient,
    private router:Router
    ) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('emailID')) );
      this.roleSubject = new BehaviorSubject<number>(JSON.parse(localStorage.getItem('role')) );
      this.userEntity = this.userSubject.asObservable();
      this.roleEntity = this.roleSubject.asObservable();
    }

  GetUser(){
    return this._http.get<User[]>(`${this.baseURL}/user`);
  }

  GetRole(){
    return this._http.get<Roles[]>(`${this.baseURL}/roles`);
  }

  SaveUser(userEntity:UserModel){
    return this._http.post<UserModel>(`${this.baseURL}/user`,userEntity);
  }
  
  UploadFile(file: File,id){
    const formData=new FormData();
    formData.append('file',file);
    return this._http.post<User>(`${this.baseURL}/user/upload/${id}`,formData);
  }

  GetUserById(id:number){
    return this._http.get<User>(`${this.baseURL}/user/${id}`);
  }

  UpdateUser(userEntity:User,id:number){
  return this._http.put<User>(`${this.baseURL}/user/${id}`,userEntity)
  }

  DeleteUser(id:number){
    return this._http.delete<Boolean>(`${this.baseURL}/user/${id}`)
  }

  

  LoginUser(userEntity:User){
    return this._http.post<User>(`${this.baseURL}/login`,userEntity)
    .pipe(map(userEntity => {
      this.userSubject.next(userEntity);
      this.roleSubject.next(userEntity.role_id.id);
     return userEntity;
  }));
  }
  public get userValue(): User {
    return this.userSubject.value;
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('emailID');
    localStorage.removeItem('role');
  }
}
