import { Controle, Cpu, Digito, Operação, Teclado } from "./calculadora"


export default class TecladoB4 implements Teclado {
    digiteDigito(digito: Digito): void {
        throw new Error("Method not implemented.");
    }
    digiteOperacao(operação: Operação): void {
        throw new Error("Method not implemented.");
    }
    digiteControle(controle: Controle): void {
        throw new Error("Method not implemented.");
    }
    definaCpu(cpu: Cpu): void {
        throw new Error("Method not implemented.");
    }
    obtenhaCpu(): Cpu {
        throw new Error("Method not implemented.");
    }
 
}
