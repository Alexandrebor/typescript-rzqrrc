export class Animal {
  public nome: string;
  public especie: string;
  private idade: number = 0;

  exibirNome() {
    console.log(this.nome);
  }
}
