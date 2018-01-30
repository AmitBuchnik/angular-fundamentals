import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
        <div class="votingWidgetContainer pointable"
            (click)="onClick()">
            <div class="well votingWidget">
                <div class="votingButton">
                    <i class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>                    
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{ count }}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['/app/events/event-details/upvote.component.css']
})
export class UpvoteComponent {
    iconColor: string;

    @Input() count: number;
    @Input() set voted(val: boolean) {
        this.iconColor = val ? 'yellow' : 'white';
    }
    @Output() vote = new EventEmitter();

    onClick(): void {
        this.vote.emit();
    }
}