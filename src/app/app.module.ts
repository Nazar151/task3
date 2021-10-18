import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {userRoutes} from "./routing/userRoute";
import { UsersComponent } from './userComponents/users/users.component';
import { UserComponent } from './userComponents/user/user.component';
import { UserDetailsComponent } from './userComponents/user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './postComponents/posts/posts.component';
import { PostComponent } from './postComponents/post/post.component';
import { PostDetailsComponent } from './postComponents/post-details/post-details.component';
import {postRoutes} from "./routing/postRoute";

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(userRoutes),
    RouterModule.forRoot(postRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
