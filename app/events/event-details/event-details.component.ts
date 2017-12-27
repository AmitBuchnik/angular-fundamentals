import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
    templateUrl: 'app/events/event-details/event-details.component.html',
    styles: [`
        .container { padding: 0px 20px;}
        .event-image { height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: any;
    
    constructor(private eventservice: EventService) {
    
    }

    ngOnInit(): void {
       this.event = this.eventservice.getEvent(1);
    }    
}