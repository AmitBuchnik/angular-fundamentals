import { Directive, ElementRef, Inject, Input, OnInit } from '@angular/core';

import { JQUERY_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    @Input('modal-trigger') modalId: string;
    private el: HTMLElement;

    constructor(refElement: ElementRef, @Inject(JQUERY_TOKEN) private $: any) {
        this.el = refElement.nativeElement;
    }

    ngOnInit(): void {
        this.el.addEventListener('click', (e) => {
            this.$(`#${this.modalId}`).modal({});
        });
    }
}