import {Routes} from "@angular/router";
import {PostsComponent} from "../postComponents/posts/posts.component";
import {PostDetailsComponent} from "../postComponents/post-details/post-details.component";

export let postRoutes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'posts/:id', component: PostDetailsComponent}
]
