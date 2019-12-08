import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxAuthFirebaseUIModule, AuthProcessService } from 'ngx-auth-firebaseui';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [NgxAuthFirebaseUIModule]
})
export class AuthenticationComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    if(this.authProcessService.user){
      this.router.navigateByUrl('/dashboard');
    }  }

  constructor(private router: Router, 
    private authService: AuthService,
    private authProcessService: AuthProcessService) { }

  ngOnInit() {
    this.authService = new AuthService();

  }

  loginSuccess(event) {
    console.log('on success: ', event);
    this.authService.loginSuccess(event).then(
      (res) => this.router.navigateByUrl('/dashboard'),
      (err: any) => console.error("Error logging in")
    );
  }

  loginFailed(event) {
    console.error('on error: ', event);
    this.authService.loginFailed(event);
  }

}
