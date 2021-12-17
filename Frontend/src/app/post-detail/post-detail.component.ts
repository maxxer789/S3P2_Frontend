import { Component, OnInit } from '@angular/core';
import { Post } from '../Models/IPost';
import { ActivatedRoute } from '@angular/router';

import { PostService } from '../PostService/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  Post?: Post;

  constructor(private postService: PostService,
    private route : ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.GetPost();
  }

  GetPost(): void
  {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.postService.GetPostById(id)
              .subscribe(post => this.Post = post);
  }
}
