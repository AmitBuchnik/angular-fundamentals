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
    DurationPipe
} from "./events/index";

import { NavbarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { TOASTR_TOKEN, IToastr } from "./common/toastr.service";
import { AuthService } from "./user/auth.service";
import { CollapsibleWellComponent } from "./common/collapsible-well.component";

declare let toastr: IToastr;

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
        DurationPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        EventRouteActivator,
        // {
        //     provide: 'canDeactivateCreateEvent',
        //     useValue: checkDirtyState
        // }
        EventsListResolver,
        AuthService
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