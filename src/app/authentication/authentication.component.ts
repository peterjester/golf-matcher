import { Component, OnInit } from '@angular/core';
import { NgbAuthFirebaseUIModule } from '@firebaseui/ng-bootstrap';

import {Router} from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [NgbAuthFirebaseUIModule]
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  printUser(event) {
    console.log('on success: ', event);
    if (event.emailVerified) {
      console.log('lets go somewhere else')
      this.router.navigate(['/dashboard'])
    }
  }

  printError(event) {
    console.error('on error: ', event);
  }

}
