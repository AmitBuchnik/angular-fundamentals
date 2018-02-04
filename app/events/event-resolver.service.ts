import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EventService, IEvent } from './index';

@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<IEvent> {
        return this.eventService.getEvent(+route.params['id']);
    }

}