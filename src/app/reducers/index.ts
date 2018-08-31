import { createSelector, ActionReducerMap } from '@ngrx/store';
import { uiReducer } from './ui';
import { userReducer } from './user';
import { State } from './state';

export const reducers: ActionReducerMap<State> = {
  ui: uiReducer,
  user: userReducer
};

export const selectNavLeftVisible = createSelector(
  (state: State) => state.ui.navLeftVisible
)
