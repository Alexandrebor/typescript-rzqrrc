import { Animal } from './animal';
class Tubarao extends Animal {
  public cor: string = 'Cinza';
  public tamanhoMandibula: number = 1.2;

  exibirCor() {
    console.log(this.cor);
  }
}
