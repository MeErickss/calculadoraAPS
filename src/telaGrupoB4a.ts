import { Digito, Sinal, Tela } from "./calculadora";

export default class TelaB4 implements Tela {
    mostreMemoria(): void {
        console.log("m");
    }
    mostreSeparadorDecimal(): void {
        console.log("..\n..\n");
    }
    mostreSinal(sinal: Sinal): void {
      if (sinal === Sinal.NEGATIVO) "-----\n";
    }
    mostreErro(): void {
      console.log("e");
    }
    mostre(digito: Digito): void {
      console.log(digito)
    }
    limpe(): void {
      console.log("tela limpa");
    }
}