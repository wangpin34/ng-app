import { UserActionTypes, UserActionsUnion } from '../actions/user';
import { User } from './user.model';

export const userReducer = (state: User, action: UserActionsUnion) => {
  switch (action.type) {
    case UserActionTypes.GetUserOK:
      return action.payload; 
    default:
      return state;
  }
}