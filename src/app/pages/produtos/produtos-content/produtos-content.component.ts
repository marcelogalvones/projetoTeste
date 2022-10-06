import { ProdutosService } from './../../../services/produtos.service';
import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-content',
  templateUrl: './produtos-content.component.html',
  styleUrls: ['./produtos-content.component.css']
})
export class ProdutosContentComponent implements OnInit, AfterViewInit {

  produtos: any[] = []

  constructor(
    private _router: Router,
    private _produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.getAllProdutos()
  }

  ngAfterViewInit(){
    this.getAllProdutos()
  }

  getAllProdutos() {
    this._produtosService.getAll().subscribe(data => this.produtos=data)
  }

  goCadastro() {
    this._router.navigate(['produtos-cadastro'])
  }
  goAltera(id: number) : void {

  }

  goDeleta(id: number) : void {

  }

}
