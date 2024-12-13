import { Controle, Cpu, Digito, Operação, Tela, Sinal } from "./calculadora";

export default class CpuB4 implements Cpu { //🐎
    tela: Tela | undefined;
    digitoMemoria = "";
    digitoUm = "";
    digitoDois = "";
    resultado: string | undefined = "";
    op: Operação | undefined = undefined;
    controleDecimal: boolean = false;
    leLimpa: boolean = false;
    completo: boolean = false;
    percentual: boolean = false;

    constructor(tela: Tela) {
        this.definaTela(tela);
    }

    private mostreDigitos(digito: Digito[], sinal: Sinal): void {
        this.tela?.limpe();
        this.tela?.mostreSinal(sinal);
        digito.forEach((element) => {
            if (String(element) === "NaN") {
                this.tela?.mostreSeparadorDecimal();
            } else {
                this.tela?.mostre(element);
            }
        });
    }

    private converteSringDigitos(string: string): Digito[] {
        return Array.from(string).filter((char) => char !== "-").map(Number);
    }

    limpa(): void {
        this.digitoUm = "";
        this.digitoDois = "";
        this.op = undefined;
        this.digitoMemoria = "";
    }

    opToString(operação: Operação): string | undefined {
        const opMap: { [key in Operação]: string } = { //🐎
            [Operação.SOMA]: "+",
            [Operação.SUBTRAÇÃO]: "-",
            [Operação.DIVISÃO]: "/",
            [Operação.PERCENTUAL]: "*0.01",
            [Operação.MULTIPLICAÇÃO]: "*",
            [Operação.RAIZ_QUADRADA]: "**0.5",
        };
        return opMap[operação];
    }

    private resolva = (expressao: string): number => {
        try {
            return new Function(`return ${expressao}`)();
        } catch {
            return 0;
        }
    };

    recebaDigito(digito: Digito): void {
        this.leLimpa = false;
        if (this.completo) {
            this.limpa();
            this.completo = false;
        }
        if (this.digitoDois === "" && this.op === undefined) {
            if (!this.digitoUm.length) {
                this.tela?.limpe();
            }
            this.digitoUm += digito;
        } else {
            if (!this.digitoDois.length) {
                this.tela?.limpe();
            }
            this.digitoDois += digito;
        }
    }

    recebaOperacao(operação: Operação): void {
        this.leLimpa = false; //🐎

        if (operação === Operação.PERCENTUAL && this.digitoDois==""){this.mostreDigitos(this.converteSringDigitos("0"), Sinal.POSITIVO);} else if(operação === Operação.PERCENTUAL) {
            this.percentual = true;
            this.recebaControle(Controle.IGUAL);
        } else if (operação === Operação.RAIZ_QUADRADA) {
            if (this.digitoUm !== "") {
                this.digitoUm = String((Number(this.digitoUm) ** 0.5));
                this.mostreDigitos(
                    this.converteSringDigitos(this.digitoUm),
                    this.digitoUm.startsWith("-") ? Sinal.NEGATIVO : Sinal.POSITIVO
                );
            }
        } else {
            if (this.digitoUm !== "" && this.digitoDois !== "") {
                this.digitoUm = this.calcularResultado();
                this.digitoDois = "";
            }
            this.op = operação;
        }
    }

    recebaControle(controle: Controle): void {
        this.leLimpa = false;
        switch (controle) {
            case Controle.DESATIVAÇÃO:
            case Controle.ATIVAÇÃO_LIMPEZA_ERRO:this.limpa();break;
            case Controle.MEMÓRIA_LEITURA_LIMPEZA:this.controleMemoria("=");break;
            case Controle.MEMÓRIA_SOMA:this.controleMemoria("+");break; //🐎
            case Controle.MEMÓRIA_SUBTRAÇÃO:this.controleMemoria("-");break;
            case Controle.SEPARADOR_DECIMAL:this.adicionaDecimal();break;
            case Controle.IGUAL:this.finalizarCalculo();break;
        }
    }

    calcularResultado(): string {
        if (this.percentual) {
            const valorBase = this.resolva(this.digitoUm);
            const valorPercentual = this.resolva(this.digitoDois || "0") * 0.01;

            const operacoesPercentuais: { [key in Operação]?: (base: number, perc: number) => number } = {
                [Operação.SOMA]: (base, perc) => base + base * perc,
                [Operação.SUBTRAÇÃO]: (base, perc) => base - base * perc,
                [Operação.MULTIPLICAÇÃO]: (base, perc) => base * perc,
                [Operação.DIVISÃO]: (base, perc) => perc !== 0 ? base / perc : 0,
            };

            const calcular = operacoesPercentuais[this.op as Operação];
            return calcular ? String(calcular(valorBase, valorPercentual)) : "0";
        } else {
            return String(this.resolva(`${this.digitoUm}${this.opToString(this.op || Operação.SOMA)}${this.digitoDois}`));
        }
    }
 //🐎
    finalizarCalculo(): void {
        if (this.digitoUm !== "" && this.digitoDois !== "") {
            this.digitoUm = this.calcularResultado();
            this.completo = true;
            if (Number(this.digitoUm) !== Infinity) {
                return this.mostreDigitos(this.converteSringDigitos(this.digitoUm), this.digitoUm.startsWith("-") ? Sinal.NEGATIVO : Sinal.POSITIVO);
            } else {
                this.tela?.mostreErro();
            }
        }
    }

    adicionaDecimal(): void {
        const alvo = this.digitoDois === "" ? "digitoUm" : "digitoDois";
        if (!this[alvo].includes(".")) {
            this[alvo] += ".";
        }
    }

    controleMemoria(operador: string): void {
        if (operador === "=") {
            if (!this.leLimpa) { //🐎
                if (this.digitoDois === "") {
                    this.digitoUm = this.digitoMemoria;
                } else {
                    this.digitoDois = this.digitoMemoria;
                }
                this.completo = true;
                this.leLimpa = true;
            } else {
                this.digitoMemoria = "";
            }
        } else {
            const expressao = `${this.digitoMemoria || 0}${operador}${this.digitoUm}`;
            this.digitoMemoria = String(this.resolva(expressao));
        }
    }

    reinicie(): void {
        this.limpa();
        this.leLimpa = false;
        this.percentual = false;
        this.completo = false;
        this.tela ? this.tela.mostre(Digito.ZERO) : null;
        this.tela?.limpe();
    }

    definaTela(tela: Tela | undefined): void {
        this.tela = tela;
    }

    obtenhaTela(): Tela | undefined {
        return this.tela;
    }
}
 //🐎