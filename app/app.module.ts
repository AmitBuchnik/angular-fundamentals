import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { EventsAppComponent } from "./events-app.component";

import { 
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    EventCreateComponent,
    EventService,
    EventRouteActivator,
    EventsListResolver
} from "./events/index";

import { NavbarComponent } from "./nav/navbar.component";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { ToastrService } from "./common/toastr.service";

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