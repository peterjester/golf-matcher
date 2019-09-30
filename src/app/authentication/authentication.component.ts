import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  printUser(event) {
    console.log('on success: ', event);
  }

  printError(event) {
    console.error('on error: ', event);
  }

}
