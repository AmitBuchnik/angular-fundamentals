import './rxjs-extensions';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { Error404Component } from './errors/404.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';

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

let toastr: IToastr = window['toastr'];
let jQuery: object = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        HttpClientModule,
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
        EventRouteActivator,
        EventResolver,        
        AuthService,
        VoterService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQUERY_TOKEN, useValue: jQuery },
        { provide: EventsListResolver, useClass: EventsListResolver },
        // {
        //     provide: 'canDeactivateCreateEvent',
        //     useValue: checkDirtyState
        // }
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
