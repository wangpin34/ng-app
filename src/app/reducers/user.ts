import { UserActionTypes, UserActionsUnion } from '../actions/user';

export class User {
  id: string;
  name: string;
  constructor(id: string, name: string){
    this.id = id;
    this.name = name;
  }
};

const initialState:Array<User> = [];
let me = new User(Math.random() + '', 'wangpin');
initialState.push(me);

export function userReducer(state: Array<User> = initialState, action: UserActionsUnion) {
  switch (action.type) {
    case UserActionTypes.AddUser:
      return [ ...state, action.payload ]

    case UserActionTypes.RemoveUser:
      state.splice(state.findIndex(function(element){
        return element.id == action.payload.id;
      }), 1)
      return [ ...state ]

    case UserActionTypes.GetUsers:
      return [ ...state ]

    default:
      return state;
  }
}