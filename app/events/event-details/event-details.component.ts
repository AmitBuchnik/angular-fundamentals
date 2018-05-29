import { Component, OnInit } from '@angular/core';

import { EventService } from '../shared/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../index';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding: 0px 20px;}
        .event-image { height: 100px;}
        a { cursor: pointer; }
        .active {  }
    `]
})
export class EventDetailsComponent implements OnInit {
    addMode: boolean = false;
    event: IEvent;
    // filterBy: string = "all";
    // sortBy: string = "name";

    constructor(private eventservice: EventService,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        // this.event = this.eventservice.getEvent(+this.route.snapshot.params['id']);

        // this.route.params.forEach((params: Params) => {
        //     this.eventservice.getEvent(+params['id']).subscribe((event: IEvent) => {
        //         this.event = event
        //         this.addMode = false;
        //     });
        // });

        // this.route.params.subscribe((params: Params) => {       
        //     // this.eventservice.getEvent(+params['id']).subscribe((event: IEvent) => {
        //     //     this.event = event
        //     //     this.addMode = false;
        //     // });
        // });

        this.route.data.subscribe((data) => {
            this.event = data['event'];
            this.addMode = false;
        });
    }

    addSession(): void {
        this.addMode = true;
    }

    saveNewSession(session: ISession): void {
        const nextId = Math.max.apply(null, this.event.sessions.map((s) => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventservice.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession(): void {
        this.addMode = false;
    }
}