import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  colorSelected: string = 'white'

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.colorSelected = 'black';
  }

  goLogout() {
    window.localStorage.clear()
    this._router.navigate(['login'])

  }
}
