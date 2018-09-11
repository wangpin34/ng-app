import { NgModule }             from '@angular/core';
import { createSelector, ActionReducerMap } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer, RouterReducerState } from '@ngrx/router-store';
import { uiReducer, UI } from './ui.reducer';
import { usersReducer } from './users.reducer';
import { userReducer } from './user.reducer';
import { addrsReducer, addrReducer } from './addrs.reducer';
import { User } from './user.model';
import { Addr } from './addr.model';

export interface State {
  ui: UI;
  users: User[];
  user: User;
  addrs: Addr[];
  addr: Addr;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<any> = {
  ui: uiReducer,
  users: usersReducer,
  user: userReducer,
  addrs: addrsReducer,
  addr: addrReducer,
  router: routerReducer,
};

export const selectNavLeftVisible = createSelector(
  (state: State) => state.ui.navLeftVisible
);

export const selectUsers = createSelector(
  (state: State) => state.users
);

export const selectCurrentUser = createSelector(
  (state: State) => state.user
);

export const selectAddrs = createSelector(
  (state: State) => state.addrs
);

export const selectCurrentAddr = createSelector(
  (state: State) => state.addr
);

export const getCurrentUrl = createSelector(
  (state: RouterReducerState) => state.state && state.state.url
);

@NgModule({
  imports: [ StoreRouterConnectingModule.forRoot()],
  exports: [ StoreRouterConnectingModule ]
})

export class StoreRouterModule {}