import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  addUser(firstName: string, lastName: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    if ((!firstName) && (!lastName)) { return };
    this.userService.addUser({ first_name: firstName, last_name: lastName } as User)
      .subscribe( user => {
        this.users.push(user);
      })
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( _ => {
        this.users.splice(this.users.indexOf(user), 1)
      })
  }

}
