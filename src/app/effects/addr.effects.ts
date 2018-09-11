import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuidv1 from 'uuid/v1';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { Addr } from '../reducers/Addr.model';
import { AddrActionTypes, 
         GetAddrs, 
         GetAddrsOK,
         GetAddrsFailed,
         GetAddr,
         GetAddrOK,
         GetAddrFailed,
         AddAddr,
         AddAddrOK,
         AddAddrFailed,
         RemoveAddr,
         RemoveAddrOK,
         RemoveAddrFailed } from '../actions/addr.action';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AddrEffects {
  private AddrsUrl = 'api/addrs';  // URL to web api

  constructor(private http: HttpClient, private actions$: Actions) { }

  @Effect()
  getAddrs$: Observable<Action> = this.actions$.pipe(
    ofType<GetAddrs>(AddrActionTypes.GetAddrs),
    mergeMap(action =>
      this.http.get(this.AddrsUrl).pipe(
        // If successful, dispatch success action with result
        map((Addrs: Addr[]) => (new GetAddrsOK(Addrs))),
        // If request fails, dispatch failed action
        catchError(() => of(new GetAddrsFailed()))
      )
    )
  );

  @Effect()
  getAddr$: Observable<Action> = this.actions$.pipe(
    ofType<GetAddr>(AddrActionTypes.GetAddr),
    mergeMap(action =>
      this.http.get(`${this.AddrsUrl}/${action.payload}`).pipe(
        // If successful, dispatch success action with result
        map((Addr: Addr) => (new GetAddrOK(Addr))),
        // If request fails, dispatch failed action
        catchError(() => of(new GetAddrFailed()))
      )
    )
  );

  @Effect()
  addAddr$: Observable<Action> = this.actions$.pipe(
    ofType<AddAddr>(AddrActionTypes.AddAddr),
    mergeMap(action =>
      this.http.post(this.AddrsUrl, action.payload).pipe(
        // If successful, dispatch success action with result
        map(
          (Addr: Addr) => {
            // Mock: In real development with backend service, the id is truly generated by backend service
            if (!Addr.id) {
              Addr.id = uuidv1();
            }
            return (new AddAddrOK(Addr));
          },
          // If request fails, dispatch failed action
          catchError(() => of(new AddAddrFailed(action.payload)))
        )
      )
    )
  );

  @Effect()
  removeAddr$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveAddr>(AddrActionTypes.RemoveAddr),
    mergeMap(action =>
      this.http.delete(`${this.AddrsUrl}/${action.payload.id}`).pipe(
        // If successful, dispatch success action with result
        map(data => (new RemoveAddrOK())),
        // If request fails, dispatch failed action
        catchError(() => of(new RemoveAddrFailed(action.payload)))
      )
    )
  );

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for Addr consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`AddrService: ${message}`);
  }
}
