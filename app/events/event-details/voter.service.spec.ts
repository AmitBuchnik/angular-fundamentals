import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable } from 'rxjs/Observable';

describe('VoterService', () => {
    let voterService: VoterService, mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['post', 'delete']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            var session = { id: 6, voters: ['puptiz', 'david'] };
            mockHttp.delete.and.returnValue(Observable.of(false));

            voterService.deleteVoter(1, <ISession>session, 'puptiz');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('david');
        });
    });
});
