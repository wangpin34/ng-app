import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as uuidv1 from 'uuid/v1';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UsersUrl = 'api/users';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.UsersUrl)
      .pipe(
        tap(users => this.log('fetched users')),
        catchError(this.handleError('getUsers', []))
      );
  }

  /** GET user from the server */
  getUser (id: string): Observable<User> {
    const url = `${this.UsersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
        tap(user => this.log('fetched user')),
        catchError(this.handleError<User>(`getUser id=${id}`))
      );
  }

  addUser (user: User): Observable<User> {
    user.id = uuidv1();
    return this.http.post(this.UsersUrl, user, httpOptions).pipe(
      tap((user: User) => this.log(`created user id=${user.id}`)),
      catchError(this.handleError<any>('createdUser'))
    )
  }

  updateUser (user: User): Observable<any> {
    return this.http.put(this.UsersUrl, user, httpOptions).pipe(
      tap(_ => this.log(`updated user id=${user.id}`)),
      catchError(this.handleError<any>('updateUser'))
    ); 
  }

  deleteUser (user: User): Observable<any> {
    const url = `${this.UsersUrl}/${user.id}`;
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`deleted user id=${user.id}`)),
      catchError(this.handleError<any>('deleteUser'))
    ); 
  }

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

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(`UserService: ${message}`);
  }
}
