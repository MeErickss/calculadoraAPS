import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora"


export default class CpuB4 implements Cpu {
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
        throw new Error("Method not implemented.");
    }
    definaTela(tela: Tela): void {
        throw new Error("Method not implemented.");
    }
    obtenhaTela(): Tela {
        throw new Error("Method not implemented.");
    }
    
}
