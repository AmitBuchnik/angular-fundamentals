import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventService } from './shared/event.service';
import { IEvent } from './index';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class='row'>
                <div class='col-md-5' *ngFor='let event of events'>
                    <event-thumbnail [event]='event'></event-thumbnail>
                </div>    
            </div>
            <!--
                <event-thumbnail [event]='event1' (eventClick)='handleEventClicked($event)'></event-thumbnail>
            -->            
            <!--
                <event-thumbnail #thumbnail [event]='event1'></event-thumbnail>
                <h3>{{ thumbnail.someProperty }}</h3>
                <button class='btn btn-primary' (click)='thumbnail.logText()'>Log Text</button>
            -->
        </div>
    `
})
export class EventsListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService,
        private route: ActivatedRoute) {

    }

    ngOnInit(): void {
        // this.eventService.getEvents().subscribe(events => { this.events = events; });
        this.events = this.route.snapshot.data['events'];
    }

    // handleEventClicked(message: string): void {
    //     alert('recieved: ' + message);
    // }
}