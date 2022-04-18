import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'API-P';
  mySubscription: Subscription = new Subscription;

  constructor(private apiService: APIService){

  }

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

  repos = []
  ngOnInit(): void {

  }

  getPublicReposWithSubscription(){
    this.mySubscription.add(
      this.apiService.getRepos('Rache1nk').subscribe((user:any)=> console.log)
    )
  }

  name = new FormControl()
}

// async getPublicReposWithPromise(username:string ){
//   const repos = await this.APIService.getRepo(username)
//   this.repos = repos
// }

// searchRepos(){
//   this.getPublicReposWithPromise(this.name.value)
//   return false;
// }


