import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { Post } from '../interfaces/Post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private Url = 'https://jsonplaceholder.typicode.com/posts'


  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.Url)
  }

  getPost(id: string): Observable<Post>{
    return  this.httpClient.get<Post>(this.Url + '/' + id)
  }

}
