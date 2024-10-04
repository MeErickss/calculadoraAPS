import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora"


export default class CpuB4 implements Cpu {

    tela: Tela | undefined;
    
    constructor(tela: Tela) {
        this.definaTela(tela);
      }
        
    recebaDigito(digito: Digito): void {
        throw new Error("Method not implemented.");
    }
    recebaOperacao(operação: Operação): void {
        throw new Error("Method not implemented.");
    }
    recebaControle(controle: Controle): void {
        throw new Error("Method not implemented.");
    }

    
    reinicie(): void {
        this.tela ? this.tela.limpe() : null;
        this.tela ? this.tela.mostre(Digito.ZERO) : null;
    }
    definaTela(tela: Tela | undefined): void {
        this.tela = tela;
    }
    obtenhaTela(): Tela {
        return this.tela;
    }
}
