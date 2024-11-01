import { Controle, Cpu, Digito, Operação, Teclado } from "./calculadora";

export default class TecladoX0 implements Teclado {
  private cpu: Cpu | undefined

  digiteDigito(digito: Digito): void {
    this.cpu?.recebaDigito(digito)
  }
  digiteOperacao(operação: Operação): void {
    this.cpu?.recebaOperacao(operação)
  }
  digiteControle(controle: Controle): void {
    this.cpu?.recebaControle(controle)
  }
  definaCpu(cpu: Cpu | undefined): void {
    this.cpu = cpu
  }
  obtenhaCpu(): Cpu | undefined {
    return this.cpu
  }
}
