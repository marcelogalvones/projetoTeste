import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { Observable } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<Users[]> {
    return this._http.get<Users[]>(config.urlAPI+'/usuarios')
  }

  getUserId(id: number): Observable<Users> {
    return this._http.get<Users>(config.urlAPI+'/usuarios/'+id)
  }


  postItem(dados: Users): Observable<Users> {
    return this._http.post<Users>(config.urlAPI+'/usuarios', dados)
  }

  putItem(dados: any): Observable<Users> {
    return this._http.put<Users>(config.urlAPI+'/usuarios/'+dados.id, dados)
  }

  deleteItem(id: number): Observable<Users> {
    return this._http.delete<Users>(config.urlAPI+'/usuarios/'+id)
  }
}
