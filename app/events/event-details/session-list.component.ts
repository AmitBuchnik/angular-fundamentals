import { Component, Input, OnChanges } from '@angular/core';

import { ISession } from '../index';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    constructor(private voterService: VoterService,
        private authService: AuthService) {

    }

    ngOnChanges(): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy);

            this.sortBy === 'name' ? this.visibleSessions.sort((s1: ISession, s2: ISession) => {
                if (s1.name > s2.name) {
                    return 1;
                }
                if (s1.name === s2.name) {
                    return 0;
                }
                return -1;
            }) : this.visibleSessions.sort((s1: ISession, s2: ISession) => {
                return s2.voters.length - s1.voters.length;
            });
        }
    }

    filterSessions(filter: string): void {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }

    toggleVote(session: ISession): void {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(session, this.authService.currentUser.userName);
        } else {
            this.voterService.addVoter(session, this.authService.currentUser.userName);
        }

        if (this.sortBy === 'votes') {
            this.visibleSessions.sort((s1: ISession, s2: ISession) => {
                return s2.voters.length - s1.voters.length;
            });
        }
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
    }
}