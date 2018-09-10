import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SHOW_NAV_LEFT, HIDE_NAV_LEFT } from '../../reducers/ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {

  }

  list() {
    this.store.dispatch({ type: SHOW_NAV_LEFT });
  }

}
