import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectNavLeftVisible } from './reducers/index';
import { UI } from './reducers/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  navLeftVisible$: Observable<boolean>;
  constructor(private store: Store<UI>) { 
  }

  ngOnInit() {
    this.navLeftVisible$ = this.store.select(selectNavLeftVisible);
  }
  
}
