import { Component, OnInit } from '@angular/core';
import { NgbAuthFirebaseUIModule } from '@firebaseui/ng-bootstrap';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [NgbAuthFirebaseUIModule]
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService = new AuthService();
    if(this.authService.isAuthenticated){
      this.router.navigateByUrl('/dashboard');
    }
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
