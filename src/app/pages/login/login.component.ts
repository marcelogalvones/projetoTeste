import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from './../../models/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged: boolean = false
  mensagem: string = '';

  formUser: Users

  constructor(
    private _router: Router,
    private _userService: UsersService
  ) {
    this.formUser = new Users
  }

  ngOnInit(): void {
    if(window.localStorage.getItem("user")) {
      this._router.navigate(['/home']);
    }
  }

  login(){
    this._userService.getAll().subscribe( (data:any) => {
      console.log("Data returned from users service => ", data)
      data.forEach((element:any) => {
        if(element.email === this.formUser.email && element.senha === this.formUser.senha){
          window.localStorage.setItem("user", JSON.stringify(element))
          this._router.navigate(['/home'])
        }
      });
      this.mensagem = "Usuário não encontrado em nossa base dados!"
      this.isLogged = true
      setTimeout(() => {
        this.isLogged = false
        this.mensagem = ""
        this.formUser = new Users
      }, 3000)
    })
  }

}
