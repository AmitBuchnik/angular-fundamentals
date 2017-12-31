import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavbarComponent } from "./nav/navbar.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { appRoutes } from "./routes";
import { EventCreateComponent } from "./events/event-create.component";
import { Error404Component } from "./errors/404.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";

import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { EventsListResolver } from "./events/events-list-resolver.service";

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent,
        EventCreateComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        // {
        //     provide: 'canDeactivateCreateEvent',
        //     useValue: checkDirtyState
        // }
        EventsListResolver
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