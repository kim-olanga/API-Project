import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  Users: User[] = [] //variable that will handle data for the component Users.

  constructor(private userService : APIService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.Users = data
      }
    )
  }

}
