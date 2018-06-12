import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: HttpClient) {
    }

    loginUser(userName: string, password: string): Observable<boolean | object> {
        // const headers = new Headers({
        //     'Content-Type': 'application/json'
        // });
        // const options = new RequestOptions({ headers: headers });
        // const logInfo = { usernaAme: userName, password: password };

        // return this.http.post('/api/login', JSON.stringify(logInfo), options)
        //     .do((response) => {
        //         if (response) {
        //             this.currentUser = response.json().user as IUser;
        //         }
        //     })
        //     .catch((error) => {
        //         return Observable.of(false);
        //     });

        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        const logInfo = { username: userName, password: password };

        return this.http.post('/api/login', logInfo, options)
            .pipe(tap(data => {
                this.currentUser = data['user'] as IUser;
            }))
            .pipe(catchError(error => {
                return of(false);
            }));
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        // return this.http.get('/api/currentidentity').map((response: any) => {
        //     if (response._body) {
        //         return response.json();
        //     } else {
        //         return {};
        //     }
        // })
        //     .do((currentUser) => {
        //         if (!!currentUser.userName) {
        //             this.currentUser = currentUser;
        //         }
        //     })
        //     .subscribe();

        return this.http.get('/api/currentidentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = data as IUser;
                }
            }))
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        // const headers = new Headers({
        //     'Content-Type': 'application/json'
        // });
        // const options = new RequestOptions({
        //     headers: headers
        // });
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }

    logout() {
        this.currentUser = undefined;

        // const headers = new Headers({
        //     'Content-Type': 'application/json'
        // });
        // const options = new RequestOptions({
        //     headers: headers
        // });
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(`/api/logout`, {}, options);
    }

    // handleError(response: Response) {
    //     return Observable.throw(response.statusText);
    // }

    private handleError<T>(opertaion = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return Observable.of(result as T);
        };
    }
}