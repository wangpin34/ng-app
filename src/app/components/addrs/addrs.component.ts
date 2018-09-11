import { Component, OnInit } from '@angular/core';
import { Store, select, Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as uuidv1 from 'uuid/v1';
import * as fromRoot from '../../reducers';
import { Addr } from '../../reducers/addr.model';
import { GetAddrs, AddAddr, RemoveAddr } from '../../actions/addr.action';

@Component({
  selector: 'app-addrs',
  templateUrl: './addrs.component.html',
  styleUrls: ['./addrs.component.css']
})
export class AddrsComponent implements OnInit {
  addrs$: Observable<Addr[]>;
  constructor(private store: Store<Addr[]> ) {}

  ngOnInit() {
    this.addrs$ = this.store.pipe(select(fromRoot.selectAddrs));
    this.getAddrs();
  }

  getAddrs(): void {
    this.store.dispatch(new GetAddrs());
  }

  deleteAddr(addr: Addr): void {
    this.store.dispatch(new RemoveAddr(addr));
  }

}
