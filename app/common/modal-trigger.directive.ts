import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';

import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    @Input('modal-trigger') modalId: string;

    constructor(refElement: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.el = refElement.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', e => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}