import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../IPost';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private postUrl = environment.url + "post/all";

  GetPosts(): Observable<Post[]>
  {
    return this.http.get<Post[]>(this.postUrl);
  }

  private postByIdUrl = environment.url + "post";

  GetPostById(id: number): Observable<Post>
  {
    return this.http.get<Post>(`${this.postByIdUrl}/${id}`);
  }

  constructor(private http: HttpClient) { }
}
