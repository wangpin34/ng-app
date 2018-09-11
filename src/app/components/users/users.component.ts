import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as uuidv1 from 'uuid/v1';
import { User } from '../../reducers/user.model';
import * as fromRoot from '../../reducers';
import { GetUsers, AddUser, RemoveUser } from '../../actions/user.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<User[]>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromRoot.selectUsers));
    this.getUsers();
  }

  getUsers(): void {
    this.store.dispatch(new GetUsers());
  }

  addUser(name: string): void {
    this.store.dispatch(new AddUser(new User('', name, uuidv1())));
  }

  deleteUser(user: User): void {
    this.store.dispatch(new RemoveUser(user));
  }

}
