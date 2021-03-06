import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { EventCreateComponent } from '../event-create.component';

@Injectable()
export class EventRouteActivator implements /* CanActivate, */ CanDeactivate<EventCreateComponent> {

    constructor(/* private eventservice: EventService,
        private router: Router */) {
    }

    // canActivate(route: ActivatedRouteSnapshot): boolean {
    //     const eventExists: boolean = !!this.eventservice.getEvent(+route.params['id']);

    //     if (!eventExists) {
    //         this.router.navigate(['/404']);
    //     }
    //     return eventExists;
    // }

    canDeactivate(component: EventCreateComponent): boolean {
        if (component.isDirty) {
            return window.confirm(`You have not saved this event, do you want to cancel?`);
        }
        return true;
    }
}