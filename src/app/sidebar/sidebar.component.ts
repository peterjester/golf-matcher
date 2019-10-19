import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  private _opened: boolean = true;

  public _toggleSidebar() {
    this._opened = !this._opened;
    console.log("toggleSidebar new opened state = "+this._opened);
  }

  get opened() : boolean {
    return this._opened
  }

  set opened(opened) {
    this.opened = opened;
  }
  ngOnInit() {
  }

}
