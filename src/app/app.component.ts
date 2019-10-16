import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'golf-matcher';
  private _opened: boolean = true;

  private _toggleSidebar() {
    this._opened = !this._opened;
    console.log("toggleSidebar new opened state = "+this._opened);
  }
  constructor() {

  }
}
