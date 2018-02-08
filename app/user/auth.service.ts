import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
    currentUser: IUser;

    constructor(private http: Http) {
    }

    loginUser(userName: string, password: string) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ 'headers': headers });
        let logInfo = { username: userName, password: password };

        return this.http.post('/api/login', JSON.stringify(logInfo), options)
            .do(response => {
                if (response) {
                    this.currentUser = <IUser>response.json().user;
                }
            })
            .catch(error => {
                return Observable.of(false);
            });
    }

    isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    handleError(response: Response) {
        return Observable.throw(response.statusText);
    }
}