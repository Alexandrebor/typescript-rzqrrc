import { Animal } from './animal';
class Camelo extends Animal {
  public genero: string = 'ungulados';
  public corcovas: number = 2;

  exibirCorcovas() {
    console.log(this.corcovas);
  }
}
