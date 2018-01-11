import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px;}
    `]
})
export class LoginComponent {
    constructor(private authSerivce: AuthService, private router: Router) {

    }

    login(formValues): void {
        this.authSerivce.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['/events']);
    }

    cancel(): void {
        this.router.navigate(['/events']);
    }
}