import { Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent }, // user/profile
    { path: 'login', component: LoginComponent } // user/profile
];