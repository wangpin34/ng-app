import { Action } from '@ngrx/store';
import { UI } from './state'

export const SHOW_NAV_LEFT = 'SHOW_NAV_LEFT';
export const HIDE_NAV_LEFT = 'HIDE_NAV_LEFT';
export const RESET = 'RESET';

const initialState = new UI();
initialState.navLeftVisible = false;

export const uiReducer = (state: UI = initialState, action: Action) => {
  switch (action.type) {
    case SHOW_NAV_LEFT:
      return { ...state, navLeftVisible: true }

    case HIDE_NAV_LEFT:
      return { ...state, navLeftVisible: false }

    case RESET:
      return new UI();

    default:
      return state;
  }
}