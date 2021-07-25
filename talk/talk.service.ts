import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Talk } from './talk';

@Injectable({
  providedIn: 'root'
})
export class TalkService {

  private baseURL = "http://localhost:8080/api/v1"
  constructor( 
    private httpClient:HttpClient,
  ) { }

  GetAllTalk():Observable<Talk[]>{
    return this.httpClient.get<Talk[]>(`${this.baseURL}/talk`);
  }

  CreateTalk(talk:Talk):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/talk`,talk);
  }

  DeleteTalk(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/talk/${id}`);
  }
}
