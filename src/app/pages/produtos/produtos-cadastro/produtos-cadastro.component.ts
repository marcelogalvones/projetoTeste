import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  styleUrls: ['./produtos-cadastro.component.css', '../../../shared/styles.css']
})
export class ProdutosCadastroComponent implements OnInit {

  formProdutos = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    marca: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required, Validators.maxLength(2)]),
    telefone: new FormGroup({
      residencial: new FormControl('', [Validators.required]),
      celular: new FormControl(''),
    })
  })

  constructor(
    private _produtosService: ProdutosService
  ) {
  }

  ngOnInit(): void {
   this.formProdutos.controls.nome.setValue('')
  }

  goSalvar() {
    console.log("this.formUsuario", this.formProdutos.value)
    this._produtosService.postItem(this.formProdutos.value).subscribe(data => {
      console.log("Data return api produtos", data)
      this.formProdutos.reset()
    })
  }

}
