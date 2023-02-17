import { Animal } from './animal';
class Leao extends Animal {
  public habitos: string = 'noturno';
  public tamanho: number = 2.8;

  exibirHabitos() {
    console.log(this.habitos);
  }
}
