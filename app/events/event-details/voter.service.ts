import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { ISession } from '../index';
import { handleError } from '../../common/index';

@Injectable()
export class VoterService {
    constructor(private http: HttpClient) {
    }

    addVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        // const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        // const headers = new Headers({
        //     'Content-Type': 'application/json'
        // });
        // const options = new RequestOptions({ headers: headers });

        // this.http.post(url, JSON.stringify({}), options)
        //     .catch(this.handleError)
        //     .subscribe();

        const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        this.http.post(url, {}, options)
            .pipe(catchError(handleError('addVoter')))
            .subscribe();
    }

    deleteVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter((voter) => voter !== voterName);
        
        const url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.delete(url)
            .pipe(catchError(handleError('deleteVoter')))
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some((voter) => voter === voterName);
    }

    // handleError(error: Response) {
    //     return Observable.throw(error.statusText);
    // }

    // private handleError<T>(opertaion = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.error(error);
    //         return Observable.of(result as T);
    //     };
    // }
}