export class Users {
  nome: string = '';
  email: string = '';
  senha: string = '';
  acesso: string = '';
  telefones: dadosTelefones = new dadosTelefones
  endereco: dadosEndereco = new dadosEndereco
}

export class dadosTelefones {
  residencial: string = ''
  celular: string = '';
}

export class dadosEndereco {
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
}
