import { Component, OnInit } from '@angular/core';
import { Post } from '../IPost'

import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  Posts: Post[] = []

  GetPosts(): void
  {
    this.postService.GetPosts()
              .subscribe(posts => this.Posts = posts);
  }

  constructor(private postService: PostService) { }

  ngOnInit(): void 
  {
    this.GetPosts();
  }

}
