import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './blog-model';

@Injectable({
  providedIn: 'root'
})
export class BlogModelService {

  private BaseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  GetBlog(){
    return this.httpClient.get<BlogModel[]>(`${this.BaseURL}/blog`);
  }
  
  SaveBlog(userEntity:BlogModel){
    return this.httpClient.post<BlogModel>(`${this.BaseURL}/blog`,userEntity);
  }

  UploadFile(file: File,id){
    const formData=new FormData();
    formData.append('file1',file);
    return this.httpClient.post<BlogModel>(`${this.BaseURL}/blog/upload/${id}`,formData);
  }

  GetBlogById(id:number){
    return this.httpClient.get<BlogModel>(`${this.BaseURL}/blog/${id}`);
  }

  UpdatBlog(userEntity:BlogModel,id:number){
  return this.httpClient.put<BlogModel>(`${this.BaseURL}/blog/${id}`,userEntity)
  }

  DeleteBlog(id:number){
    return this.httpClient.delete<Boolean>(`${this.BaseURL}/blog/${id}`)
  }
}
