//🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎
import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora"

export default class CpuB4 implements Cpu {
    tela: Tela | undefined
    digitoMemoria = ""//🐎
    digitoUm = ""
    digitoDois = ""
    resultado: string | undefined = ""
    op: Operação | undefined = undefined//🐎
    controleDecimal: boolean = false
    leLimpa: boolean = false
    completo: boolean = false
//🐎
    constructor(tela: Tela) {//🐎
        this.definaTela(tela)
    }

    opToString(operação: Operação): string {
        switch (operação) {
            case Operação.SOMA: return "+"
            case Operação.SUBTRAÇÃO: return "-"//🐎
            case Operação.DIVISÃO: return "/"
            case Operação.PERCENTUAL: return "*0.01"
            case Operação.MULTIPLICAÇÃO: return "*"
            case Operação.RAIZ_QUADRADA: return "**0.5"
            default: return ""
        }
    }

    converte = (expressao: string): number => {
        try {
            const func = new Function('return ' + expressao)
            return func()
        } catch (e) {
            console.error("Erro na conversão da expressão:", e)
            return 0
        }//🐎
    }

    recebaDigito(digito: Digito): void {
        this.leLimpa = false//🐎
        if (this.completo == true) { this.digitoDois = ""; this.completo = false }
        if (this.digitoDois === "" && this.op === undefined) {
            this.digitoUm += digito
        } else {
            this.digitoDois += digito
        }
    }

    recebaOperacao(operação: Operação): void {
        this.leLimpa = false//🐎
        if (!this.ehUnario(this.op)) {
            if (this.digitoUm !== "" && this.digitoDois !== "") {
                this.realizaCalculo()
            }
        } else if (this.digitoUm !== "") {
            this.realizaCalculo()
        }
        this.op = operação//🐎
    }

    recebaControle(controle: Controle): void {
        this.leLimpa = false
        switch (controle) {
            case Controle.DESATIVAÇÃO:
            case Controle.ATIVAÇÃO_LIMPEZA_ERRO: this.limpa(); break
            case Controle.MEMÓRIA_LEITURA_LIMPEZA: this.lerMemoria(); break
            case Controle.MEMÓRIA_SOMA: this.adicionaMemoria(); break
            case Controle.MEMÓRIA_SUBTRAÇÃO: this.limpaMemoria(); break
            case Controle.SEPARADOR_DECIMAL: this.adicionaDecimal(); break
            case Controle.IGUAL: this.realizaCalculo(); break
        }//🐎
    }

    realizaCalculo(): void {
        if (!this.ehUnario(this.op)) {
            this.resultado = String(`${this.digitoUm}${this.opToString(this.op || Operação.SOMA)}${this.digitoDois}`)
            this.digitoUm = String(this.converte(`${this.digitoUm}${this.opToString(this.op || Operação.SOMA)}${this.digitoDois}`))
            this.digitoDois = ""//🐎
        } else if (this.op === Operação.RAIZ_QUADRADA) {
            this.resultado = String(`${this.digitoUm}${this.opToString(this.op)}`)
            this.digitoUm = String(this.converte(`${this.digitoUm}${this.opToString(this.op)}`))
            this.digitoDois = ""//🐎
        } else {//🐎
            this.resultado = String(`${this.digitoUm}${this.opToString(this.op || Operação.MULTIPLICAÇÃO)}${this.digitoDois}`)
            const imutavel = this.digitoUm
            this.digitoUm = String(this.converte(`${this.digitoUm}${this.opToString(this.op || Operação.MULTIPLICAÇÃO)}${this.digitoDois}`))
            this.digitoDois = imutavel
        }

        console.log(`${this.resultado} = ${this.digitoUm}`)

        this.op = undefined
        this.completo = true
    }

    private ehUnario(operação: Operação | undefined): boolean {
        return operação === Operação.RAIZ_QUADRADA || operação === Operação.PERCENTUAL
    }

    adicionaDecimal(): void {
        this.leLimpa = false
        if (this.digitoDois === "" && !this.digitoUm.includes(".")) {
            this.digitoUm += "."//🐎
        } else if (!this.digitoDois.includes(".")) {
            this.digitoDois += "."
        }
    }

    limpaMemoria(): void {
        this.leLimpa = false 
        this.digitoMemoria = ""
    }

    adicionaMemoria(): void {
        this.leLimpa = false//🐎
        this.digitoMemoria = this.digitoUm
    }

    lerMemoria(): void {
        if (this.leLimpa == false) {
            this.digitoDois = this.digitoUm
            this.digitoUm = this.digitoMemoria
            this.completo = true
        } else {//🐎
            this.digitoMemoria = ""
            this.completo = false
        }
    }

    reinicie(): void {
        this.limpa()
        this.tela ? this.tela.mostre(Digito.ZERO) : null
    }

    limpa(): void {
        this.digitoUm = ""
        this.digitoDois = ""
        this.op = undefined
        this.digitoMemoria = ""
        this.completo = false
        this.leLimpa = false //🐎
    }

    definaTela(tela: Tela | undefined): void {
        this.tela = tela
    }

    obtenhaTela(): Tela | undefined {
        return this.tela
    }
}
//🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎🐎
