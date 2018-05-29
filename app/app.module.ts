import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { EventsAppComponent } from './events-app.component';

import {
    CreateSessionComponent,
    DurationPipe,
    EventCreateComponent,
    EventDetailsComponent,
    EventResolver,
    EventRouteActivator,
    EventService,
    EventsListComponent,
    EventsListResolver,
    EventThumbnailComponent,
    LocationValidator,
    SessionListComponent,
    UpvoteComponent,
    VoterService,
} from './events/index';

import {
    CollapsibleWellComponent,
    IToastr,
    JQUERY_TOKEN,
    ModalTriggerDirective,
    SimpleModalComponent,
    TOASTR_TOKEN,
} from './common/index';

import { Error404Component } from './errors/404.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

let toastr: IToastr = window['toastr'];
let jQuery: object = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) // optimistic bundle download (when ready)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidator,
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQUERY_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventResolver,
        // {
        //     provide: 'canDeactivateCreateEvent',
        //     useValue: checkDirtyState
        // }
        { provide: EventsListResolver, useClass: EventsListResolver },
        AuthService,
        VoterService,
    ],
    bootstrap: [EventsAppComponent],
})
export class AppModule { }

// function checkDirtyState(component: EventCreateComponent) {
//     if (component.isDirty) {
//         return window.confirm(`You have not saved this event, do you want to cancel?`);
//     }
//     return true;
// }
