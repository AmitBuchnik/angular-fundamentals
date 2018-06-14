import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

describe('VoterService', () => {
    let voterService: VoterService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            const session = { id: 6, voters: ['puptiz', 'david'] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(1, <ISession>session, 'puptiz');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('david');
        });

        it('should call http.delete with the right URL', () => {
            const session = { id: 6, voters: ['puptiz', 'david'] };
            mockHttp.delete.and.returnValue(of(false));
            // mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(1, <ISession>session, 'puptiz');
            expect(mockHttp.delete).toHaveBeenCalledWith(`api/events/1/sessions/6/voters/puptiz`);
        });
    });

    describe('addVoter', () => {
        it('should call http.post with the right URL', () => {
            const session = { id: 6, voters: ['puptiz'] };
            mockHttp.post.and.returnValue(Observable.of(false));

            voterService.addVoter(1, <ISession>session, 'david');
            expect(mockHttp.post).toHaveBeenCalledWith(`api/events/1/sessions/6/voters/david`, '{}', jasmine.any(Object));
        });
    });
});
