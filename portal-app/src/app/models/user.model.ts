export class User {
  id: string;
  nome: string;
  email: string;
  dataCadastro: number = Date.now();
  ativo: boolean;
}
