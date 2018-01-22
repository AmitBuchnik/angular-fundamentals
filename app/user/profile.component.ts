import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';
import { TOASTR_TOKEN, IToastr } from '../common/toastr.service';

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em {float: right; color: #e05c65; padding-left: 10px;}
    .error input { background-color: #e3c3c5;}
    .error ::-webkit-input-placeholder { color: #999 }
    .error ::-moz-placeholder { color: #999 }
    .error :-moz-placeholder { color: #999 }
    .error ::-ms-input-placeholder { color: #999 }  
  `]
})
export class ProfileComponent implements OnInit {
  private profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToastr) {

  }

  ngOnInit(): void {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues): void {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.toastr.success('Profile saved');
    }
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }

  validateFirstName(): boolean {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName(): boolean {
    return this.lastName.valid || this.lastName.untouched;
  }
}