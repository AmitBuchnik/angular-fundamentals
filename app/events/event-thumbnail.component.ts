import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class='well hoverwell thumbnail'>
            <h2>{{ event.name }}</h2>
            <div>Date: {{ event.date }}</div>
            <div>Time: {{ event.time }}</div>
            <div>Price: {{ event.price | currency: 'USD': true }}</div>
            <div>
                <span>Location: {{ event.location.address }}</span>
                <span class='pad-left'>{{ event.location.city }}, {{ event.location.country }}</span>
            </div>

            <!-- <button class='btn btn-primary' (click)='handleClickMe()'>Click me</button> -->
        </div>
    `,
    styleUrls: ['app/events/event-thumbnail.component.css']

    // styles: [`
    //     .pad-left { margin-left: 10px; }
    //     .well div { color: #bbb; }
    // `]
})
export class EventThumbnailComponent extends OnChanges {
    @Input()
    event: any;
    // someProperty: string = 'some value';
    // @Output()
    // eventClick = new EventEmitter();

    ngOnChanges(): void {

    }

    // logText(): void {
    //     alert('logText');
    // }

    // handleClickMe(): void {
    //     this.eventClick.emit(this.event.name);
    // }
}
