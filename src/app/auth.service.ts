import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: IUser;

  constructor(private router: Router) {

  }


  loginSuccess(event) {
    let userData =  event.providerData[0];
    this.currentUser = userData;
    this.router.navigate(['/appointments'])
  }

  loginFailed(event) {
    console.log(event);
  }

  isAuthenticated():boolean {
      return !!this.currentUser;
  }
}