import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-altera',
  templateUrl: './users-altera.component.html',
  styleUrls: ['./users-altera.component.css', '../../../shared/styles.css']
})
export class UsersAlteraComponent implements OnInit {

  idUsuario: number = 0;

  formUsuario: Users
  cepNaoEncontrado: boolean = false
  formularioInvalido: boolean = false
  disabledButton: boolean = false


  constructor(
    private _http: HttpClient,
    private _usersServices: UsersService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.formUsuario = new Users()
  }

  ngOnInit(): void {
    this.idUsuario = Number(this._activatedRoute.snapshot.paramMap.get("id"));
    this._usersServices.getUserId(this.idUsuario).subscribe( data => {
      this.formUsuario = data
    })

  }

  buscaEndereco(e: any) {
    console.log("e => ", e.target.value)
    this._http.get("https://viacep.com.br/ws/"+this.formUsuario.endereco.cep+"/json/").subscribe( (dataCep: any) => {
      if(dataCep.erro){
        this.cepNaoEncontrado = true
        setTimeout(() => {
          this.formUsuario.endereco.cep = ''
          this.cepNaoEncontrado = false
        }, 2000)
        return
      }
      this.formUsuario.endereco.logradouro = dataCep['logradouro']
      this.formUsuario.endereco.bairro = dataCep['bairro']
      this.formUsuario.endereco.cidade = dataCep['localidade']
      this.formUsuario.endereco.estado = dataCep['uf']
    })
  }

  goSalvar(){
    if(this.formUsuario.nome === "" || this.formUsuario.email === ""
      || this.formUsuario.senha === "" || this.formUsuario.acesso === "") {
      this.formularioInvalido = true
      setTimeout(() => {
        this.formularioInvalido = false
      }, 3000)
      return
    }
    this._usersServices.putItem(this.formUsuario).subscribe( data => {
      console.log("Data", data)
      this._router.navigate(['/users'])
    })
  }

}
