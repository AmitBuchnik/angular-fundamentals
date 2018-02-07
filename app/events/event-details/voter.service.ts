import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ISession } from '../index';

@Injectable()
export class VoterService {
    constructor(private http: Http) {
    }

    addVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters.push(voterName);

        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers: headers });
        let url = `api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;

        this.http.post(url, JSON.stringify({}), options)
            .catch(this.handleError)
            .subscribe();
    }

    deleteVoter(eventId: number, session: ISession, voterName: string): void {
        session.voters = session.voters.filter(voter => voter !== voterName);
        this.http.delete(`api/events/${eventId}/sessions/${session.id}/voters/${voterName}`)
            .catch(this.handleError)
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName);
    }

    handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}