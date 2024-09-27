import { Digito, Tela } from "./Calculadora";



export default class TelaGrupo22 implements Tela {

 mostrarDigito(digito: Digito): void {

 console.log(digito);

 }

 limpa(): void {

 console.clear();

 }

}