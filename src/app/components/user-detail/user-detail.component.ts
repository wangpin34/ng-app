import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../../reducers/user.model';
import * as fromRoot from '../../reducers';
import { GetUser } from '../../actions/user.action';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() user: User;
  viewMod: boolean;

  constructor(
    private store: Store<User>,
    private route: ActivatedRoute,
    private location: Location) 
  {
    this.viewMod = true; 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.store.pipe(select(fromRoot.selectCurrentUser)).subscribe((user:User) => {
      this.user = user;
    });
    this.getUser(id);
  }

  getUser(id: string): void {
    this.store.dispatch(new GetUser(id));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    
  }

  toggleEditMod(): void {
    this.viewMod = !this.viewMod;
  }

}
