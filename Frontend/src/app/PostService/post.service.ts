import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Models/IPost';
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

  public GetPostById(id: number): Observable<Post>
  {
    return this.http.get<Post>(`${this.postUrl}/${id}`);
  }

}
