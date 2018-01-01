import { Routes } from '@angular/router';

import {
    EventsListComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventCreateComponent,
    EventsListResolver
} from './events/index'

import { Error404Component } from './errors/404.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: EventCreateComponent, canDeactivate: [EventRouteActivator] /*canDeactivate: ['canDeactivateCreateEvent']*/ },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];