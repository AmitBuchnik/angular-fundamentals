import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div class='row'>
                <div class='col-md-5' *ngFor='let event of events'>
                    <event-thumbnail [event]='event' (click)='handleThumbnailClicked(event.name)'></event-thumbnail>
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
    events: any[];

    constructor(private eventService: EventService,
        private toastr: ToastrService) {

    }

    ngOnInit(): void {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClicked(eventName: string) {
        this.toastr.success(eventName);
    }

    // handleEventClicked(message: string): void {
    //     alert('recieved: ' + message);
    // }
}