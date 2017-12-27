import { Routes } from '@angular/router';

import { EventsListComponent } from "./events/events-list.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventCreateComponent } from './events/event-create.component';

export const appRoutes: Routes = [
    { path: 'events/new', component: EventCreateComponent },
    { path: 'events/:id', component: EventDetailsComponent },    
    { path: 'events', component: EventsListComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];