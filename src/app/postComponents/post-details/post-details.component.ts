import { Component, OnInit } from '@angular/core';
import {Post} from "../../interfaces/Post";
import {PostService} from "../../services/posts.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post

  constructor(private postService : PostService, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPost(params.id).subscribe(value => this.post = value)
    })
  }

  ngOnInit(): void {
  }

}
