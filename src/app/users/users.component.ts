import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { User } from '../user';
import { Repository } from '../repository';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  User!: User; //variable that will handle data for the component Users.
  Repository!: Array<Repository>;

  constructor(public userService : APIService, public reposiroryService: APIService) { }

  searchQuerry(username: any){
    this.userService.profileRequest(username).subscribe(res => {
      this.User = res;
    });
    this.reposiroryService.repositoryRequest(username).subscribe(res => {
      this.Repository = res;
    })
  }

  ngOnInit(): void {
    this.searchQuerry('Kim-olanga');
  }

}
