import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private http: HttpClient) { }



  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.BASE_URL + 'Users')
  }

  getPosts(){
    console.log('Test')
  }
}
