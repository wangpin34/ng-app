import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { StoreModule, ActionReducer, MetaReducer  } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { UserEffects } from './effects/user.effects';
import { reducers } from './reducers/index';


import { AppRoutingModule }     from './app-routing.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './components/app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    DashboardComponent,
    NavLeftComponent,
    HeaderComponent,
    BodyComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
