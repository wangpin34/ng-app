import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HIDE_NAV_LEFT } from '../../reducers/ui.reducer';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.css']
})
export class NavLeftComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  unlist() {
    this.store.dispatch({ type: HIDE_NAV_LEFT });
  }

}
