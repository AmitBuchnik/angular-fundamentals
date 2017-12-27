import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding: 0px 20px;}
        .event-image { height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any;

    constructor(private eventservice: EventService,
        private route: ActivatedRoute) {
    
    }

    ngOnInit(): void {
        this.event = this.eventservice.getEvent(+this.route.snapshot.params['id']);
    }
}