// user.ts
import { Action } from '@ngrx/store';
import { User } from '../reducers/user.model';

export enum UserActionTypes {
  AddUser = '[User] Add',
  AddUserOK = '[User] Add OK',
  AddUserFailed = '[User] Add Failed',
  RemoveUser = '[User] Remove',
  RemoveUserOK = '[User] Remove OK',
  RemoveUserFailed = '[User] Remove Failed',
  GetUsers = '[User]s Get',
  GetUsersOK = '[User]s Get OK',
  GetUsersFailed = '[User]s Get Failed',
  GetUser = '[User] Get',
  GetUserOK = '[User] Get Ok',
  GetUserFailed = '[User] Get Failed',
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GetUsers;
}

export class GetUsersOK implements Action {
  readonly type = UserActionTypes.GetUsersOK;
  constructor(public payload: User[]) {}
}

export class GetUsersFailed implements Action {
  readonly type = UserActionTypes.GetUsersFailed;
}

export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
  constructor(public payload: string) {}
}

export class GetUserOK implements Action {
  readonly type = UserActionTypes.GetUserOK;
  constructor(public payload: User) {}
}

export class GetUserFailed implements Action {
  readonly type = UserActionTypes.GetUserFailed;
}

export class AddUser implements Action {
  readonly type = UserActionTypes.AddUser;
  constructor(public payload: User) {}
}

export class AddUserOK implements Action {
  readonly type = UserActionTypes.AddUserOK;
  constructor(public payload: User) {}
}

export class AddUserFailed implements Action {
  readonly type = UserActionTypes.AddUserFailed;
  constructor(public payload: User) {}
}

export class RemoveUser implements Action {
  readonly type = UserActionTypes.RemoveUser;
  constructor(public payload: User) {}
}

export class RemoveUserOK implements Action {
  readonly type = UserActionTypes.RemoveUserOK;
}

export class RemoveUserFailed implements Action {
  readonly type = UserActionTypes.RemoveUserFailed;
  constructor(public payload: User) {}
}


export type UserActionsUnion = GetUsers | GetUsersOK | GetUsersFailed | GetUser | GetUserOK | GetUserFailed | AddUser | AddUserOK | AddUserFailed | RemoveUser | RemoveUserOK | RemoveUserFailed;