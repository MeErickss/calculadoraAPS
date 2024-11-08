import { Digito, Operação, Sinal, Tela } from "./calculadora";

export default class TelaB4 implements Tela {
  mostreMemoria(): void {
      console.log("M   M\nMM MM\nM M M\nM   M\nM   M\n");
  }
  mostreSeparadorDecimal(): void {
      console.log("..\n..\n");
  }
  mostreSinal(sinal: Sinal): void {
      if (sinal == 1) { console.log("-----\n"); }
  }
  mostreErro(): void {
      console.log("EEEE\nE   \nEE  \nE   \nEEEE\n");
  }
  mostre(digito: Digito): void {
      switch (digito) {
          case Digito.ZERO:
              console.log("0000\n0  0\n0  0\n0  0\n0000\n");
              break;
          case Digito.UM:
              console.log("  1 \n  1 \n  1 \n  1 \n1111\n");
              break;
          case Digito.DOIS:
              console.log("222222\n     2\n   2\n 2\n2\n222222\n");
              break;
          case Digito.TRÊS:
              console.log("3333\n   3\n 333\n   3\n3333\n");
              break;
          case Digito.QUATRO:
              console.log("4  4\n4  4\n4444\n   4\n   4\n");
              break;
          case Digito.CINCO:
              console.log("5555\n5   \n5555\n   5\n5555\n");
              break;
          case Digito.SEIS:
              console.log("6666\n6   \n6666\n6  6\n6666\n");
              break;
          case Digito.SETE:
              console.log("7777\n   7\n   7\n   7\n   7\n");
              break;
          case Digito.OITO:
              console.log("8888\n8  8\n8888\n8  8\n8888\n");
              break;
          case Digito.NOVE:
              console.log("9999\n9  9\n9999\n   9\n   9\n9999\n");
              break;
      }
  }

  mostreOperação(operação: Operação){
    switch (operação) {
      case Operação.SOMA:
          console.log("+");
          break;
      case Operação.SUBTRAÇÃO:
          console.log("-");
          break;
      case Operação.MULTIPLICAÇÃO:
          console.log("*");
          break;
      case Operação.DIVISÃO:
          console.log("/");
          break;
      case Operação.PERCENTUAL:
          console.log("%");
          break;
      case Operação.RAIZ_QUADRADA:
          console.log("**0.5");
          break;
  }
  }

  limpe(): void {
      console.clear();
  }
}
