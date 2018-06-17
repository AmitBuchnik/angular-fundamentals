import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SessionListComponent } from './session-list.component';
import { CollapsibleWellComponent } from '../../common/collapsible-well.component';
import { UpvoteComponent } from './upvote.component';
import { ISession } from '../shared/event.model';
import { AuthService } from '../../user/auth.service';
import { VoterService } from './voter.service';
import { DurationPipe } from '../shared/duration.pipe';

// @Component({})
// class UpvoteComponent {

// } 

describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugElement: DebugElement;

    // asynchronous, need to complete before we create the instance of the component
    beforeEach(async(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: { userName: 'david' }
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                // CollapsibleWellComponent,
                DurationPipe,
                // UpvoteComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [
                {
                    id: 1, name: 'Session 1', presenter: 'Amit', duration: 1, level: 'beginner',
                    abstract: 'abstract', voters: ['david', 'bob']
                }
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 2;

            component.ngOnChanges();
            fixture.detectChanges();

            // expect(element.querySelector('[well-title]').textContent)
            //     .toContain('Session 1');
            expect(debugElement.query(By.css('[well-title]'))
                .nativeElement.textContent).toContain('Session 1');
        });
    });
});