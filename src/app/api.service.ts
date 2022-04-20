import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  username: any;
  userRepository: any;
  userProfile: any;

  constructor(private http: HttpClient) { 
    this.userProfile = new User ("","","","",0,0,0,"",new Date)
    this.userRepository = new Repository ("","",0,"",new Date,0,"")
  }



  profileRequest(username: string):Observable<User>{
    return this.http.get<User>('https://api.github.com/users/${username}?client_id=${environment.clientId}$client_secrets=${environment.apiKey}');
  }

  repositoryRequest(username: string):Observable<Array<Repository>> {
    return this.http.get<Array<Repository>>('https://api.github.com/users/${username}?client_id=${environment.clientId}$client_secrets=${environment.apiKey}');
  }


}
