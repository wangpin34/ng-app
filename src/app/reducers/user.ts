import { UserActionTypes, UserActionsUnion } from '../actions/user';
import { User } from './user.model';


const initialState: User[] = [];

export function usersReducer(state: User[] = initialState, action: UserActionsUnion) {
  switch (action.type) {

    case UserActionTypes.AddUser:
      return [ ...state, action.payload ]

    case UserActionTypes.AddUserOK:
      let user = state.find(user => {
        return user.tempId === action.payload.tempId;
      })
      user.id = action.payload.id;
      return [ ...state ];

    case UserActionTypes.AddUserFailed:
      state.splice(state.findIndex(user => {
        return user.tempId === action.payload.tempId;
      }), 1)
      return [ ...state ];
      
    case UserActionTypes.RemoveUser:
      state.splice(state.findIndex(user => {
        return user.id === action.payload.id;
      }), 1)
      return [ ...state ];

    case UserActionTypes.RemoveUserFailed:
      return [ ...state, action.payload ]

    case UserActionTypes.GetUsersOK:
      return [ ...action.payload ];

    default:
      return [ ...state ];
  }
}