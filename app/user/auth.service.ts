import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: Http) {
    }

    loginUser(userName: string, password: string) {
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({ headers: headers });
        const logInfo = { username: userName, password: password };

        return this.http.post('/api/login', JSON.stringify(logInfo), options)
            .do((response) => {
                if (response) {
                    this.currentUser = response.json().user as IUser;
                }
            })
            .catch((error) => {
                return Observable.of(false);
            });
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        return this.http.get('/api/currentidentity').map((response: any) => {
            if (response._body) {
                return response.json();
            } else {
                return {};
            }
        })
            .do((currentUser) => {
                if (!!currentUser.userName) {
                    this.currentUser = currentUser;
                }
            })
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;

        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({
            headers: headers
        });
        return this.http.put(`/api/users/${this.currentUser.id}`, JSON.stringify(this.currentUser), options);
    }

    logout() {
        this.currentUser = undefined;

        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({
            headers: headers
        });
        return this.http.post(`/api/logout`, JSON.stringify({}), options);
    }

    handleError(response: Response) {
        return Observable.throw(response.statusText);
    }
}