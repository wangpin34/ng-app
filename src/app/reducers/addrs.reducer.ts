import { AddrActionTypes, AddrActionsUnion } from '../actions/addr.action';
import { Addr } from './addr.model';


const initialState: Addr[] = [];

export function addrsReducer(state: Addr[] = initialState, action: AddrActionsUnion) {
  switch (action.type) {

    case AddrActionTypes.AddAddr:
      return [ ...state, action.payload ]

    case AddrActionTypes.AddAddrOK:
      let Addr = state.find(Addr => {
        return Addr.tempId === action.payload.tempId;
      })
      Addr.id = action.payload.id;
      return [ ...state ];

    case AddrActionTypes.AddAddrFailed:
      state.splice(state.findIndex(addr => {
        return addr.tempId === action.payload.tempId;
      }), 1)
      return [ ...state ];

    case AddrActionTypes.UpdateAddrOK:
      state[state.findIndex(addr => {
        return addr.tempId === action.payload.tempId;
      })] = action.payload;
      return [ ...state ];
    case AddrActionTypes.RemoveAddr:
      state.splice(state.findIndex(Addr => {
        return Addr.id === action.payload.id;
      }), 1)
      return [ ...state ];

    case AddrActionTypes.RemoveAddrFailed:
      return [ ...state, action.payload ]

    case AddrActionTypes.GetAddrsOK:
      return [ ...action.payload ];

    default:
      return [ ...state ];
  }
}

export const addrReducer = (state: Addr, action: AddrActionsUnion) => {
  switch (action.type) {
    case AddrActionTypes.GetAddrOK:
      return action.payload; 
    default:
      return state;
  }
}