import { Component, OnInit } from '@angular/core';

import { AuthService } from '../user/auth.service';
import { ISession, EventService, IEvent } from '../events/index';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display: none; } }
        li > a.active { color: #f97924; }
    `]
})
export class NavbarComponent implements OnInit {    
    searchTerm: string = '';
    events: IEvent[];
    foundSessions: ISession[];

    constructor(private authService: AuthService,
        private eventService: EventService) {
    }

    ngOnInit(): void {
        this.eventService.getEvents().subscribe(events => { this.events = events; });
    }

    searchSessions(searchTerm: string): void {
        this.eventService.searchSessions(searchTerm).subscribe((sessions) => {
            this.foundSessions = sessions;
        });
    }
}