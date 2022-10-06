import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeContentComponent } from './pages/home/home-content/home-content.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersContentComponent } from './pages/users/users-content/users-content.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { UsersCadastroComponent } from './pages/users/users-cadastro/users-cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { UsersAlteraComponent } from './pages/users/users-altera/users-altera.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ProdutosCadastroComponent } from './pages/produtos/produtos-cadastro/produtos-cadastro.component';
import { ProdutosContentComponent } from './pages/produtos/produtos-content/produtos-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    HomeContentComponent,
    UsersComponent,
    UsersContentComponent,
    ClientesComponent,
    UsersCadastroComponent,
    LoginComponent,
    UsersAlteraComponent,
    ProdutosComponent,
    ProdutosCadastroComponent,
    ProdutosContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
