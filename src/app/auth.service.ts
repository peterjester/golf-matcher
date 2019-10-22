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
    let userData =  event.providerData[0];
    this.currentUser = userData;
  }

  loginFailed(event) {
    console.log(event);
  }

  isAuthenticated():boolean {
      return !!this.currentUser;
  }
}