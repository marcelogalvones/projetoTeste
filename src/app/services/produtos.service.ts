import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this._http.get<any>(config.urlAPI+'/produtos')
  }

  postItem(dados: any): Observable<any> {
    return this._http.post(config.urlAPI+"/produtos", dados)
  }
}
