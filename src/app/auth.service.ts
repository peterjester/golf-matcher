import { Injectable } from '@angular/core';
import { IUser } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: IUser;

  constructor() {

  }

  async loginSuccess(event) {
    console.log("login success");
    let userData =  event.providerData[0];
    this.currentUser = userData;
  }

  loginFailed(event) {
    console.log(event);
  }

  isAuthenticated():boolean {
      console.log(!!this.currentUser);
      return !!this.currentUser;
  }
}