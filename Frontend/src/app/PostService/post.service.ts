import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../IPost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }

  private postUrl = environment.postUrl + "posts";

  public GetPosts(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.postUrl);
  }

  private postByIdUrl = environment.postUrl + "post";

  public GetPostById(id: number): Observable<Post>
  {
    return this.http.get<Post>(`${this.postByIdUrl}/${id}`);
  }

}
