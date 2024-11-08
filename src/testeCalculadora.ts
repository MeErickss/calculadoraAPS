import { Controle, Cpu, Digito, Operação, Sinal, Tela } from "./calculadora";

export class TestadorTela {
  private tela: Tela;

  constructor(tela: Tela) {
    this.tela = tela;
  }

  testeTodosNúmeros() {
    this.tela.limpe();
    console.log("= Testando todos os dígitos ===========================");
    Object.keys(Digito).forEach((element) => {
      if (Number(element)) this.tela.mostre(Number(element));
    });
  }

  //testeTodosNúmeros() {
  //  this.tela.limpe();
  //  console.log("= Testando todos os dígitos ===========================");
  //  const digitos: Digito[] = [
  //    Digito.ZERO,
  //    Digito.UM,
  //    Digito.DOIS,
  //    Digito.TRÊS,
  //    Digito.QUATRO,
  //    Digito.CINCO,
  //    Digito.SEIS,
  //    Digito.SETE,
  //    Digito.OITO,
  //    Digito.NOVE,
  //  ];
//
  //  digitos.forEach((digito) => {
  //    this.tela.mostre(digito);
  //    console.log("--------------");
  //  });
  //}

  testeTodosSímbolo() {
    this.tela.limpe();
    console.log("= Testando todos os símbolos ===========================");
    for (let i = 0; i < 8; i++) {
      this.tela.mostre(Digito.OITO);
      this.tela.mostreSeparadorDecimal();
    }
    this.tela.mostreMemoria();
    this.tela.mostreSinal(Sinal.NEGATIVO);
    this.tela.mostreErro();
  }
}

export class TestadorCpu {
  private cpu: Cpu;

  constructor(cpu: Cpu) {
    this.cpu = cpu;
  }

  teste123Soma456() {
    console.log("= Testando 123 + 456 ===========================");
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaOperacao(Operação.SOMA);
    [Digito.QUATRO, Digito.CINCO, Digito.SEIS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.IGUAL);
  }

  teste12Soma34Soma56() {
    console.log("= Testando 12 + 34 + 56 ===========================");
    [Digito.UM, Digito.DOIS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaOperacao(Operação.SOMA);
    [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaOperacao(Operação.SOMA);
    [Digito.CINCO, Digito.SEIS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.IGUAL);
  }

  teste12Divisão10() {
    console.log("= Testando 12 / 10  ===========================");
    [Digito.UM, Digito.DOIS].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.UM, Digito.ZERO].forEach((element) => {
      this.cpu.recebaDigito(element);
    });
    this.cpu.recebaControle(Controle.IGUAL);
  }
}
