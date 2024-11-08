import { Controle, Cpu, Digito, Operação, Sinal, Tela } from "./calculadora";

export default class CpuB4 implements Cpu {
    tela: Tela | undefined;
    private digitoMemoria = "";
    private digitoUm = "";
    private digitoDois = "";
    private resultado: string | undefined = "";
    private op: Operação | undefined = undefined;
    private leLimpa: boolean = false;
    private completo: boolean = false;

    constructor(tela: Tela) {
        this.definaTela(tela);
    }

    limpa(): void {
        this.digitoUm = "";
        this.digitoDois = "";
        this.op = undefined;
        this.digitoMemoria = "";
    }

    private opToString(operação: Operação): string {
        switch (operação) {
            case Operação.SOMA: return "+";
            case Operação.SUBTRAÇÃO: return "-";
            case Operação.DIVISÃO: return "/";
            case Operação.PERCENTUAL: return "*0.01";
            case Operação.MULTIPLICAÇÃO: return "*";
            case Operação.RAIZ_QUADRADA: return "**0.5";
        }
    }

    private mostreDigitos(digito: Digito[], sinal: Sinal): void {
        try {
            this.tela?.limpe();
            this.tela?.mostreSinal(sinal);
            digito.forEach((element) => {
                if (String(element) == "NaN"){
                    this.tela?.mostreSeparadorDecimal();
                } else {this.tela?.mostre(element)}
            });
        } catch (error) {
            this.tela?.mostreErro();
        }
    }

    private converteStringDigitos(string: string): Digito[] {
        let resultado: Digito[] = [];
        for (let i of string) {
            if (i != "-") {
                resultado.push(Number(i));
            }
        }
        return resultado;
    }

    private resolva = (expressao: string): number => {
        try {
            const func = new Function('return ' + expressao);
            return func();
        } catch (e) {
            console.error("Erro na conversão da expressão:", e);
            return 0;
        }
    }

    recebaDigito(digito: Digito): void {
        this.leLimpa = false;
        if (this.completo == true) { 
            this.limpa(); 
            this.completo = false; 
        }
        if (this.digitoDois === "" && this.op === undefined) {
            if (!this.digitoUm.length) { this.tela?.limpe(); }
            this.digitoUm += digito;
        } else {
            if (!this.digitoDois.length) { this.tela?.limpe(); }
            this.digitoDois += digito;
        }
        this.tela?.mostre(digito)
    }

    recebaOperacao(operação: Operação): void {
        this.leLimpa = false;

        if (this.digitoUm !== "" && this.digitoDois !== "") {
            this.calcularResultado();
        }

        this.op = operação;
        this.tela?.mostreOperação(operação)
    }

    recebaControle(controle: Controle): void {
        this.leLimpa = false;
        switch (controle) {
            case Controle.DESATIVAÇÃO:
            case Controle.ATIVAÇÃO_LIMPEZA_ERRO: this.limpa(); break;
            case Controle.MEMÓRIA_LEITURA_LIMPEZA: this.controleMemoria("="); break;
            case Controle.MEMÓRIA_SOMA: this.controleMemoria("+"); break;
            case Controle.MEMÓRIA_SUBTRAÇÃO: this.controleMemoria("-"); break;
            case Controle.SEPARADOR_DECIMAL: this.adicionaDecimal(); break;
            case Controle.IGUAL: this.finalizarCalculo(); break;
        }
    }

    private calcularResultado(): string {
        if (!this.ehUnario(this.op)) {
            const resultado = this.resolva(`${this.digitoUm}${this.opToString(this.op || Operação.SOMA)}${this.digitoDois}`);
            this.digitoUm = String(resultado);
            this.digitoDois = "";
            return String(resultado);
        } else if (this.op === Operação.RAIZ_QUADRADA) {
            return String(this.resolva(`${this.digitoUm}${this.opToString(this.op)}`));
        } else {
            const percentual = this.resolva(this.digitoDois) * 0.01;
            const resultado = this.resolva(this.digitoUm) + percentual * this.resolva(this.digitoUm);
            return String(resultado);
        }
    }

    private finalizarCalculo(): void {
        if (this.digitoUm !== "" && this.digitoDois !== "") {
            const resultado = this.calcularResultado();
            this.completo = true;
            this.mostreDigitos(this.converteStringDigitos(this.digitoUm), (this.digitoUm.lastIndexOf("-") === -1 ? Sinal.POSITIVO : Sinal.NEGATIVO));
        }
    }

    private ehUnario(operação: Operação | undefined): boolean {
        return operação === Operação.RAIZ_QUADRADA || operação === Operação.PERCENTUAL;
    }

    private adicionaDecimal(): void {
        const alvo = this.digitoDois === "" ? "digitoUm" : "digitoDois";
        if (!this[alvo].includes(".")) { this[alvo] += "."; }
    }

    private controleMemoria(operador: string): void {
        if (operador === "=") {
            if (this.leLimpa == false) {
                if (this.digitoDois === "") {
                    this.digitoUm = this.digitoMemoria;
                } else { this.digitoDois = this.digitoMemoria; }
                this.completo = true;
                this.leLimpa = true;
                this.tela?.mostreMemoria();
            } else { this.digitoMemoria == ""; }
        } else if (operador === "-") { this.digitoMemoria = ""; }
        else {
            const expressao = `${this.digitoMemoria || 0}${operador}${this.digitoUm}`;
            this.digitoMemoria = String(this.resolva(expressao));
        }
    }

    reinicie(): void {
        this.limpa();
        this.leLimpa = false;
        this.completo = false;
        this.tela ? this.tela.mostre(Digito.ZERO) : null;
    }

    definaTela(tela: Tela | undefined): void {
        this.tela = tela;
    }

    obtenhaTela(): Tela | undefined {
        return this.tela;
    }
}
