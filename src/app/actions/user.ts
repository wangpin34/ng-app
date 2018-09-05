// counter.actions.ts
import { Action } from '@ngrx/store';
import { User } from '../reducers/state';

export enum UserActionTypes {
  AddUser = '[User] Add',
  RemoveUser = '[User] Remove',
  GetUsers = '[User]s Get',
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;
  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = UserActionTypes.RemoveUser;
  constructor(public payload: User) {}
}


export type UserActionsUnion = GetUsers | AddUser | RemoveUser;