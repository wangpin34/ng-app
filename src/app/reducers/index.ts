import { createSelector, ActionReducerMap } from '@ngrx/store';
import { uiReducer, UI } from './ui';
import { usersReducer } from './user';
import { userReducer } from './user.reducer';
import { User } from './user.model';

export interface State {
  ui: UI;
  users: User[];
  user: User;
}

export const reducers: ActionReducerMap<any> = {
  ui: uiReducer,
  users: usersReducer,
  user: userReducer
};

export const selectNavLeftVisible = createSelector(
  (state: State) => state.ui.navLeftVisible
)

export const selectUsers = createSelector(
  (state: State) => state.users
)

export const selectCurrentUser = createSelector(
  (state: State) => state.user
)