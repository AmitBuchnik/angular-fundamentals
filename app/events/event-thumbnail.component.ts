import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { IEvent } from './index';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class='well hoverwell thumbnail' [routerLink]="['/events', event?.id]">
            <h2>{{ event?.name }}</h2>
            <div>Date: {{ event?.date }}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]='event?.time'>
                Time: {{ event?.time }}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <!--
                <div [style.color]="event?.time === '8:00 am' ? '#003300': '#bbb'" [ngSwitch]='event?.time'>
                    Time: {{ event?.time }}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>     
            -->   
            <!--
                <div [ngClass]="getStartTimeClass()" [ngSwitch]='event?.time'>
                    Time: {{ event?.time }}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>    
            -->
            <!--
                <div [class.green]="event?.time === '8:00 am'" [ngSwitch]='event?.time'>
                    Time: {{ event?.time }}
                    <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                    <span *ngSwitchDefault>(Normal Start)</span>
                </div>
            -->               
            <div>Price: {{ event?.price | currency: 'USD': true }}</div>
            <div [hidden]='!event?.location'>
                <span>Location: {{ event?.location?.address }}</span>
                <span class='pad-left'>{{ event?.location?.city }}, {{ event?.location?.country }}</span>
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
export class EventThumbnailComponent implements OnChanges {
    @Input() event: IEvent;
    // someProperty: string = 'some value';
    // @Output() eventClick = new EventEmitter();

    ngOnChanges(): void {

    }

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return { 'color': '#003300', 'font-weight': 'bold' };
        }
        return {};
    }

    getStartTimeClass() {
        // const isEarlyStart = this.event && this.event.time === '8:00 am';
        // return { green: isEarlyStart, bold: isEarlyStart };

        if (this.event && this.event.time === '8:00 am') {
            // return ['green', 'bold'];
            return 'green bold';
        }
        // return [];
         return '';
    }

    // logText(): void {
    //     alert('logText');
    // }

    // handleClickMe(): void {
    //     this.eventClick.emit(this.event.name);
    // }
}
