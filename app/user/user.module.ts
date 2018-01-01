import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { userRoutes } from './user.routes';
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        FormsModule,
        RouterModule.forChild(userRoutes)
    ],
    providers: []
})
export class UserModule {

}