// counter.actions.ts
import { Action } from '@ngrx/store';

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
}

export class RemoveUser implements Action {
  readonly type = UserActionTypes.RemoveUser;
}


export type UserActionsUnion = GetUsers | AddUser | RemoveUser;