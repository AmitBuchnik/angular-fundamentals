import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EventService } from './shared/event.service';

@Injectable()
export class EventsListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }

    resolve(): Observable<any> {
        return this.eventService.getEvents(); //.map(events => events);
    }
}