export class Pessoa {
  public nome: string;
  public isMaioridade: boolean = true;
  public idade: number = 35;
  public peso: number = 110;

  exibirNome() {
    console.log(this.nome);
  }
}
