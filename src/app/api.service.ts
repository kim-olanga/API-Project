import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) { }



  getRepos(username: string):any {
    return this.http.get('https://api.github.com/users/${username}/repos');
  }

  // getPosts(){
  //   console.log('Test')
  // }
}
