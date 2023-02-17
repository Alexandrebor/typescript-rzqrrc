import { Animal } from './animal';
class PicaPau extends Animal {
  public envergadura: number = 76;
  public localidade: string = 'AmericaCentral';

  exibirEnvergadura() {
    console.log(this.envergadura);
  }
}
