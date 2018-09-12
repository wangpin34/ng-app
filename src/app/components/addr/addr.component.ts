import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Addr } from '../../reducers/addr.model';
import * as fromRoot from '../../reducers';
import { GetAddr, UpdateAddr } from '../../actions/addr.action';

@Component({
  selector: 'app-addr',
  templateUrl: './addr.component.html',
  styleUrls: ['./addr.component.css']
})
export class AddrComponent implements OnInit {
  @Input() addr: Addr;
  constructor(
    private store: Store<Addr>,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.pipe(select(fromRoot.selectCurrentAddr)).subscribe((addr:Addr) => {
      this.addr = addr;
    });
    this.getUser(id);
  }

  getUser(id: string): void {
    this.store.dispatch(new GetAddr(id));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.store.dispatch(new UpdateAddr(this.addr));
    this.location.back();
  }
  
}
