import { Controle, Cpu, Digito, Operação } from "./calculadora"


export default class cpu implements Cpu {
    receba(digito: Digito): void
    receba(operação: Operação): void
    receba(controle: Controle): void
    receba(controle: unknown): void {
        
    }
    reinicie(): void {
        
    }
}