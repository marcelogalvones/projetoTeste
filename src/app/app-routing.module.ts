import { ProdutosCadastroComponent } from './pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { UsersAlteraComponent } from './pages/users/users-altera/users-altera.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersCadastroComponent } from './pages/users/users-cadastro/users-cadastro.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsersComponent } from './pages/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users-cadastro', component: UsersCadastroComponent },
  { path: 'users-altera/:id', component: UsersAlteraComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'produtos-cadastro', component: ProdutosCadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
