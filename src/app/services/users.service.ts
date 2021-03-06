import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private Url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient : HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.Url)
  }

  getUser(id: string): Observable<User> {
    return this.httpClient.get<User>(this.Url + '/' + id)
  }
}
