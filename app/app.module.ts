import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EventsAppComponent } from "./events-app.component";

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    CreateSessionComponent,
    EventService,
    EventRouteActivator,
    EventsListResolver,
    SessionListComponent,
    DurationPipe,
    UpvoteComponent,
    VoterService,
    LocationValidator
} from "./events/index";

import {
    JQUERY_TOKEN,
    TOASTR_TOKEN,
    IToastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from "./common/index";

import { NavbarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";

declare let toastr: IToastr;
declare let jQuery: Object;

@NgModule({
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
        LocationValidator
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQUERY_TOKEN, useValue: jQuery },
        EventRouteActivator,
        // {
        //     provide: 'canDeactivateCreateEvent',
        //     useValue: checkDirtyState
        // }
        { provide: EventsListResolver, useClass: EventsListResolver },
        AuthService,
        VoterService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

// function checkDirtyState(component: EventCreateComponent) {
//     if (component.isDirty) {        
//         return window.confirm(`You have not saved this event, do you want to cancel?`);
//     }
//     return true;
// }