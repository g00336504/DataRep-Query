import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
//import { Stream } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }
/*-----Here for the Addpost function i have added all the titles and their types which will be passed to the server----- */
  addPost(title: string, content: string, reference: string, DOB: string, Doctor: string, Diagnosis: string): Observable<any> {
    const post: Post = {title: title, content: content, reference: reference,
                        DOB: DOB, Doctor: Doctor, Diagnosis: Diagnosis};
    return this.http.post("http://localhost:8081/api/posts",post);
  }

  deletePost(id: String): Observable<any> {
    return this.http.delete("http://localhost:8081/api/posts/"+id);
  }

  getPost(id:String): Observable<any> {
    return this.http.get("http://localhost:8081/api/posts/"+id);
  }
/*-----Here when post is to be updated it will be called by its ID and edited----- */
   updatePost(id:String, title: string, content: string, reference: string, DOB: string, Doctor: string, Diagnosis: string ): Observable<any> {
    const post: Post = {title: title, content: content, reference: reference, DOB: DOB, Doctor: Doctor, Diagnosis: Diagnosis};
   return this.http.put("http://localhost:8081/api/posts/"+id, post);
   }
}
