import { Component, OnInit } from '@angular/core';
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
export class EventCreateComponent implements OnInit {
    isDirty: boolean = true;

    constructor(private router: Router, private eventService: EventService) {

    }

    ngOnInit(): void { }

    saveEvent(event: IEvent): void {
        this.eventService.saveEvent(event).subscribe((event) => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }

    cancel(isInvalid: boolean): void {
        this.isDirty = isInvalid;
        this.router.navigate(['/events']);
    }
}