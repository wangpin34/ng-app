import { createSelector, ActionReducerMap } from '@ngrx/store';
import { uiReducer, UI } from './ui';
import { userReducer, User } from './user';

export interface State {
  ui: UI;
  users: Array<User>;
}

export const reducers: ActionReducerMap<any> = {
  ui: uiReducer,
  users: userReducer
};

export const selectNavLeftVisible = createSelector(
  (state: State) => state.ui.navLeftVisible
)

export const selectUsers = createSelector(
  (state: State) => state.users
)