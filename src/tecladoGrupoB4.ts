import { Controle, Digito, Operação, Teclado } from "./calculadora"


export default class teclado implements Teclado {
    digite(digito: Digito): void
    digite(operação: Operação): void
    digite(controle: Controle): void
    digite(controle: unknown): void {
        
    }
}