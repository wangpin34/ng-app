import { Component, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../reducers/user';
import * as fromRoot from '../reducers';
import * as UserActions from '../actions/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(private store: Store<Array<User>>) { }

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromRoot.selectUsers))
  }

  getUsers(): void {
    
  }

  addUser(name: string): void {
    this.store.dispatch(new UserActions.AddUser(new User(Math.random()+'', name)));
  }

  deleteUser(user: User): void {
    this.store.dispatch(new UserActions.RemoveUser(user))
  }

}
