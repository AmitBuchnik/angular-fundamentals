import { Routes } from '@angular/router';

import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventCreateComponent } from './events/event-create.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: EventCreateComponent, canDeactivate: [EventRouteActivator] /*canDeactivate: ['canDeactivateCreateEvent']*/ },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];