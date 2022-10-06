import { Router } from '@angular/router';
import { Users } from './../../../models/users';
import { UsersService } from './../../../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-content',
  templateUrl: './users-content.component.html',
  styleUrls: ['./users-content.component.css']
})
export class UsersContentComponent implements OnInit {

  usersArray: any[];
  ok: string = 'none'

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) {
    this.usersArray = []
  }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this._usersService.getAll().subscribe( data => {
      this.usersArray = data

    })
  }

  goAltera(id: number){
    this._router.navigate(['/users-altera', id])
  }

  goDeleta(id: number){
    this._usersService.deleteItem(id).subscribe( data => {
      this.getAllUsers()
      this.ok = 'block';
      setTimeout(() => {
        this.ok = 'none';
      }, 3000)
    })
  }

  goCadastro(): void {
    this._router.navigate(['/users-cadastro']);

  }
}
