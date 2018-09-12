import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Location } from '@angular/common';
import { selectCurrentUrl } from '../../reducers';
import { SHOW_NAV_LEFT, HIDE_NAV_LEFT } from '../../reducers/ui.reducer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  path: string;
  pathName: string;
  constructor(private store: Store<any>, private location: Location) { }

  ngOnInit() {
    let addrEditUrlReg: RegExp = new RegExp(/^\/addrs\/([^\/]+)\/edit$/, 'ig');
    let addrAddUrlReg: RegExp = new RegExp(/^\/addrs\/([^\/]+)\/add$/, 'ig');
    this.store.pipe(select(selectCurrentUrl)).subscribe((url: string) => {
      this.path = url;
      if (addrEditUrlReg.test(url)) {
        this.pathName = 'edit-addr';
      } else if (addrAddUrlReg.test(url)) {
        this.pathName = 'add-addr';
      } else {
        this.pathName = 'home';
      }
      console.log('pathName:' + this.pathName);
    });
  }

  list() {
    this.store.dispatch({ type: SHOW_NAV_LEFT });
  }

  goback() {
    this.location.back();
  }

}
