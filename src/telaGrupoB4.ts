import { Digito, Tela } from "./calculadora";



export default class telaGrupoB4 implements Tela {

 mostreDigito(digito: Digito): void {

 console.log(digito);

 }

 limpa(): void {

 console.clear();

 }

}