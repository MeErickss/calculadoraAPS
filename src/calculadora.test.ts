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

  // ===========================================================================

  // 1.0 SOMA

  test('Testar 123 + 456', () => {
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

  // 1.1  SOMA varios números

  test('Testar 12 + 34 + 56', () => {
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

  // 1.2 SOMA com Decimal

  test('Testar 10 + 1.5', () => {
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

  // 1.3 SOMA com resultado negativo

  test('Testar - 10 + 4', () => {
    console.log("= Testando - 10 + 4 ===========================");

    [Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element)
    });

    cpu.recebaOperacao(Operação.SUBTRAÇÃO);

    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.SOMA);

    [Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("6")
    expect(tela.sinal).toBe(Sinal.NEGATIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // ===========================================================================
  
  // 2.0 SUBTRAÇÂO 

  test('Testar 123 - 456', () => {
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
  

  // 2.1 SUBTRAÇÂO varios números

  test('Testar 300 - 34 - 56', () => {
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

  // 2.2 SUBTRAÇÃO com Decimal 

  test('Testar 10 - 3.5', () => {
    console.log("= Testando 10 + 1.5 ===========================");
    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.SUBTRAÇÃO)
    cpu.recebaDigito(Digito.TRÊS)
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
    cpu.recebaDigito(Digito.CINCO);

    cpu.recebaControle(Controle.IGUAL);
    expect(tela.digitos).toBe("6.5")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // ===========================================================================

  // 3.0 DIVISÃO

  test('Testar 12 / 10', () => {
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

  // 3.1 DIVISÃO vários números

  test('Testar 1000 / 10 / 4', () => {
    console.log("= Testando 1000 / 10 / 4 ===========================");
    [Digito.UM, Digito.ZERO, Digito.ZERO, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.DIVISÃO);

    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.DIVISÃO);

    [Digito.QUATRO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaControle(Controle.IGUAL);

    expect(tela.digitos).toBe("25")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // 3.2 DIVISÃO decimal 

  test('Testar 10 / 2.5', () => {
    console.log("= Testando 10 / 2.5 ===========================");

    [Digito.UM, Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element);
    });

    cpu.recebaOperacao(Operação.DIVISÃO);

    cpu.recebaDigito(Digito.DOIS)
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
    cpu.recebaDigito(Digito.CINCO);

    cpu.recebaControle(Controle.IGUAL);
    
    expect(tela.digitos).toBe("4")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // 3.2.1 DIVISÃO decimal 

  test('Testar 0.5 / 2', () => {
    console.log("= Testando 0.5 / 2 ===========================");
    
    cpu.recebaDigito(Digito.ZERO)
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
    cpu.recebaDigito(Digito.CINCO);

    cpu.recebaOperacao(Operação.DIVISÃO);

    cpu.recebaDigito(Digito.DOIS)

    cpu.recebaControle(Controle.IGUAL);

    expect(tela.digitos).toBe("0.25")
    expect(tela.sinal).toBe(Sinal.POSITIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // 3.2.2 DIVISÃO decimal 

  test('Testar - 0.5 / 0.5', () => {
    console.log("= Testando 0.5 / 0.5 ===========================");

    [Digito.ZERO].forEach((element) => {
      cpu.recebaDigito(element)
    });

    cpu.recebaOperacao(Operação.SUBTRAÇÃO);
    
    cpu.recebaDigito(Digito.ZERO)
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
    cpu.recebaDigito(Digito.CINCO);

    cpu.recebaOperacao(Operação.DIVISÃO);

    cpu.recebaDigito(Digito.ZERO)
    cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
    cpu.recebaDigito(Digito.CINCO);

    cpu.recebaControle(Controle.IGUAL);

    expect(tela.digitos).toBe("1")
    expect(tela.sinal).toBe(Sinal.NEGATIVO)
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeFalsy()
  })

  // 3.3 DIVISÃO numero negativo

  test('Testar -2 / 10', () => {
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

  // 3.4 DIVISÃO por 0 

  test('Testar 20 / 0', () => {
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
    expect(tela.memoria).toBeFalsy()
    expect(tela.error).toBeTruthy()
  })

    // ===========================================================================

    // 4.0 MULTIPLICAÇÃO

    test('Testar 3 x 4', () => {
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

    // 4.1 MULTIPLICAÇÃO com mais de dois digitos

    test('Testar 12 x 3 x 5', () => {
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

    // 4.2 MULTIPLICAÇÃO com decimal 

    test('Testar 0.75 x 5', () => {
      console.log("====== 0.75 x 5 ===========================");
      
      cpu.recebaDigito(Digito.ZERO)
      cpu.recebaControle(Controle.SEPARADOR_DECIMAL);
      cpu.recebaDigito(Digito.SETE);
      cpu.recebaDigito(Digito.CINCO);
  
      cpu.recebaOperacao(Operação.MULTIPLICAÇÃO);
  
      cpu.recebaDigito(Digito.CINCO);
  
      cpu.recebaControle(Controle.IGUAL);
  
      expect(tela.digitos).toBe("3.75")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })


    // 4.3 MULTIPLICAÇÃO negativo com resultado negativo
    // ( nosso cliente não deixa multipllicar dois numero negativos, somente o primeiro numero consegue ser negativo )

    test('Testar -1 x 20 ', () => {
      console.log("= Testando  -1 x 20 ===========================");

      [Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element)
      });

      cpu.recebaOperacao(Operação.SUBTRAÇÃO); 

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

    // 4.4 MULTIPLICAÇÃO com 0

    test('Testar 320 x 0 x 800 ', () => {
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

    // 4.4.1 MULTIPLICAÇÃO com 0 no primeiro numero

    test('Testar 0 x 800 ', () => {
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

    // 4.4.2 MULTIPLICAÇÃO com numero negativo e zero

    test('Testar -120 x 0 ', () => {
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

    //

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

    // Teste Memoria
     test('Testar 10, M+,  ', () => {
       console.log("= Testando 10 + 1.5 ===========================");

       cpu.recebaDigito(Digito.UM)
       cpu.recebaDigito(Digito.DOIS)
       cpu.recebaDigito(Digito.TRÊS)
       cpu.recebaControle(Controle.MEMÓRIA_SOMA)
       cpu.recebaOperacao(Operação.SOMA)
       cpu.recebaDigito(Digito.UM)
       cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
       cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
  
       cpu.recebaControle(Controle.IGUAL);
       expect(tela.digitos).toBe("246")
       expect(tela.sinal).toBe(Sinal.POSITIVO)
       expect(tela.memoria).toBeFalsy()
       expect(tela.error).toBeFalsy()
     })
  })