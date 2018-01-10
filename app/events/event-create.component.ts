import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EventService, IEvent } from './shared/index';

@Component({
    templateUrl: 'app/events/event-create.component.html',
    styles: [`
        em {float: right; color: #e05c65; padding-left: 10px;}
        .error input { background-color: #e3c3c5;}
        .error ::-webkit-input-placeholder { color: #999 }
        .error ::-moz-placeholder { color: #999 }
        .error :-moz-placeholder { color: #999 }
        .error ::-ms-input-placeholder { color: #999 }
  `]
})
export class EventCreateComponent {
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {

    }

    saveEvent(event: IEvent): void {
        this.eventService.saveEvent(event);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}