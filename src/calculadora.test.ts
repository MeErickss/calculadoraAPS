import { Controle, Digito, Operação, Sinal } from "./calculadora"
import CpuB4 from "./cpuGrupoB4"
import TelaX0Teste from "./telaX0Teste"

describe('Testando minha calculadora',() =>{
    let tela: TelaX0Teste = new TelaX0Teste()
    let cpu: CpuB4 = new CpuB4(tela)
    cpu.definaTela(tela)

    test ('Testar 123+456', ()=>{
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

    test ('Testar 12+34+56', ()=>{
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
      expect(tela.digitos).toBe("")
      expect(tela.sinal).toBe(Sinal.POSITIVO)
      expect(tela.memoria).toBeFalsy()
      expect(tela.error).toBeFalsy()
    })

    test ('Testar 12/10', ()=>{
      console.log("= Testando 12 / 10  ===========================");
      [Digito.UM, Digito.DOIS].forEach((element) => {
        cpu.recebaDigito(lement);
      });

      cpu.recebaOperacao(Operação.DIVISÃO);
      [Digito.UM, Digito.ZERO].forEach((element) => {
        cpu.recebaDigito(element);
      });
      
      cpu.recebaControle(Controle.IGUAL);
      
    })
})