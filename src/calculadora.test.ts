import { SourceMap } from "module"
import { Controle, Digito, Operação, Sinal } from "./calculadora"
import CpuB4 from "./cpuGrupoB4"
import TelaX0Teste from "./telaX0Teste"

describe('Testando minha calculadora', () => {
  let tela: TelaX0Teste = new TelaX0Teste()
  let cpu: CpuB4 = new CpuB4(tela)
  cpu.definaTela(tela)

  beforeEach(() => {
    cpu.reinicie();
  })

  // SOMA

  test('Testar 123+456', () => {
    console.log("= Testando 123 + 456 ===========================");
    [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.SOMA);
    [Digito.QUATRO, Digito.CINCO, Digito.SEIS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("579")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  });

  //

  test('Testar 12+34+56', () => {
    console.log("= Testando 12 + 34 + 56 ===========================");
    [Digito.UM, Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.SOMA);
    [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.SOMA);
    [Digito.CINCO, Digito.SEIS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("102")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // ===========================================================================
  // Stela :D

  // DIVISÃO

  test('Testar 12/10', () => {
    console.log("= Testando 12 / 10  ===========================");
    [Digito.UM, Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("1.2")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // dividindo numero negativo

  test('Testar -2/10', () => {
    console.log("= Testando -2 / 10  ===========================");

    [Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element)
    });

    cpu.recebaOperacao(Operação.SUBTRAÇÃO);

    [Digito.DOIS].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.DIVISÃO);
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("0.2")
    expect(tela.sinal).toBe(Sinal.NEGATIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // divisão por 0 

  test('Testar 20/0', () => {
    console.log("= Testando 20 / 0  ===========================");

    [Digito.DOIS, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element)
    });

    cpu.recebaOperacao(Operação.DIVISÃO);

    [Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);

    expect(tela.digitos).toBe("")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeTruthy()
  })

    // MULTIPLICAÇÃO

    test('Testar 3*4', () => {
      console.log("= Testando 3 x 4 ===========================");
      [Digito.TRÊS].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
      [Digito.QUATRO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);

      expect(tela.digitos).toBe("12")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // teste multiplicação com mais de dois digitos

    test('Testar 12*3*5', () => {
      console.log("= Testando  12 x 3 x 5 ===========================");
      [Digito.UM, Digito.DOIS].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.TRÊS].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
      [Digito.CINCO,].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);

      expect(tela.digitos).toBe("180")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // teste multiplicação negativo com resultado negativo

    // nosso cliente não deixa multipllicar dois numero negativos, somente o primeiro numero consegue ser negativo

    test('Testar -1*20 ', () => {
      console.log("= Testando  -1 x 20 ===========================");

      [Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO); // NÃO TEM RECEBA SINAL? (cliente não deixa :v)
      // cpu.recebaSinal(Sinal.NEGATIVO);

      [Digito.UM].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.DOIS, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);

      expect(tela.digitos).toBe("20")
      expect(tela.sinal).toBe(Sinal.NEGATIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // teste multiplicação com 0

    test('Testar 320*0*800 ', () => {
      console.log("= Testando  320 x 0 x 800 ===========================");

      [Digito.TRÊS, Digito.DOIS, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.OITO, Digito.ZERO, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);

      expect(tela.digitos).toBe("0")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // 

    test('Testar 0*800 ', () => {
      console.log("= Testando 0 x 800 ===========================");

      [Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.OITO, Digito.ZERO, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.OITO, Digito.ZERO, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);

      expect(tela.digitos).toBe("0")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // multiplicação com numero negativo e zero

    test('Testar -120*0 ', () => {
      console.log("= Testando -120 x 0 ===========================");

      [Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO);

      [Digito.UM, Digito.DOIS, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
      });

      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);

      [Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);

      expect(tela.digitos).toBe("0")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // ===========================================================================
    // Lauber

    //SUBTRAÇÃO

    // Teste subtração dois numeros

    test('Testar 123-456', () => {
      console.log("=Testando 123 - 456 ===========================");
      [Digito.UM, Digito.DOIS, Digito.TRÊS].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO);

      [Digito.QUATRO, Digito.CINCO, Digito.SEIS].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);
      expect(tela.digitos).toBe("333")
      expect(tela.sinal).toBe(Sinal.NEGATIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    });

    // Teste subtração tres numeros

    test('Testar 300-34-56', () => {
      console.log("= Testando 300 - 34 - 56 ===========================");
      [Digito.TRÊS, Digito.ZERO, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO);

      [Digito.TRÊS, Digito.QUATRO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO);

      [Digito.CINCO, Digito.SEIS].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaControle(Controle.IGUAL);
      expect(tela.digitos).toBe("210")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // Teste Soma Decimal

    test('Testar 10+1.5', () => {
      console.log("= Testando 10 + 1.5 ===========================");
      [Digito.UM, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.SOMA)
      cpu.recebaDigito(Digito.UM)
      cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
      cpu.recebaDigito(Digito.CINCO);
  
      cpu.recebaControle(Controle.IGUAL);
      expect(tela.digitos).toBe("11.5")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    // Teste Memoria
    test('Testar 10, M+,  ', () => {
      console.log("= Testando 10 + 1.5 ===========================");
      [Digito.UM, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.SOMA)
      cpu.recebaDigito(Digito.UM)
      cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
      cpu.recebaDigito(Digito.CINCO);
  
      cpu.recebaControle(Controle.IGUAL);
      expect(tela.digitos).toBe("11.5")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })




    // ===========================================================================
    // Otavo


    // Teste de Raiz Quadrada
    test('Testar Raiz Quadrada de 4', () => {
      console.log("= Testar Raiz Quadrada de 4 ===========================");
      [Digito.QUATRO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.RAIZ_QUADRADA);

      expect(tela.digitos).toBe("2")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    });

    // Teste de percentual TUDO ERRADO NO CODIGO

    test('Testar subtrair 10% de 80', () => {
      console.log("= Testar subtrair1 0% de 80 ===========================");
      [Digito.OITO, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO);
      [Digito.UM, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.PERCENTUAL);
      cpu.recebaControle(Controle.IGUAL);

      


      expect(tela.digitos).toBe("72")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    });


    test('Testar 20 + %', () => {
      console.log("= 20 + % ===========================");
      [Digito.DOIS, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });

      cpu.recebaOperacao(Operação.PERCENTUAL);


      expect(tela.digitos).toBe("0")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    });







  })