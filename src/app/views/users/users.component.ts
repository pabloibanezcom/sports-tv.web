import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'st-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getEvents()
      .subscribe(
      data => this.users = data,
      error => this.usersService.afterError(error)
      );
  }
}
