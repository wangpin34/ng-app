import { UserActionTypes, UserActionsUnion } from '../actions/user';
import { User } from './state';

const initialState:Array<User> = [];

export const userReducer = (state: Array<User> = initialState, action: UserActionsUnion) => {
  console.log(action.type);
  switch (action.type) {
    case UserActionTypes.AddUser:
      return [ ...state ]

    case UserActionTypes.RemoveUser:
      return [ ...state ]

    case UserActionTypes.GetUsers:
      return [ ...state ]

    default:
      return state;
  }
}