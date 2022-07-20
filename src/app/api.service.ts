import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  user:any
  username= "kim-olanga";
  userRepository: any;
  userProfile: any;

  MYKEY: string = environment.apikey;
  USERAPIURL = `https://api.github.com/users/${this.username}`

  constructor(private http: HttpClient) { 
    console.log('our service is doing quite well...')
  }



  getGithubUserData():Observable<any> {
    return this.http.get<User>(this.USERAPIURL)
   

  }
  getGithubUserRepoData():Observable<any> {
    return this.http.get<Repository>('https://api.github.com/users/'+this.username+'/repos?acess_token='+this.MYKEY);
  }

  getUserData(username:string){
    return this.http.get<any>(
      `https://api.github.com/users/${username}`
    )
  }


}
