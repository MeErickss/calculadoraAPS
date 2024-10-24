"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = require("./calculadora");
class CpuB4 {
    opToString(operação) {
        switch (operação) {
            case calculadora_1.Operação.SOMA: return "+";
            case calculadora_1.Operação.SUBTRAÇÃO: return "-";
            case calculadora_1.Operação.DIVISÃO: return "/";
            case calculadora_1.Operação.PERCENTUAL: return "%";
            case calculadora_1.Operação.MULTIPLICAÇÃO: return "*";
            case calculadora_1.Operação.RAIZ_QUADRADA: return "**0.5";
        }
    }
    constructor(tela) {
        this.converte = (expressao) => {
            const func = new Function('return ' + expressao);
            return func();
        };
        this.mDigito = "";
        this.pDigito = "";
        this.digitoDois = "";
        this.op = undefined;
        this.definaTela(tela);
    }
    recebaDigito(digito) {
        if (this.digitoDois == "" && this.op == undefined) {
            this.pDigito += digito;
        }
        else {
            this.digitoDois += digito;
        }
    }
    recebaOperacao(operação) {
        if (this.op != calculadora_1.Operação.RAIZ_QUADRADA) {
            if ((this.pDigito != "" && this.digitoDois != "") || this.ehUnario(operação)) {
                this.realizaCalculo();
            }
        }
        else {
            this.realizaCalculo();
        }
        this.op = operação;
    }
    recebaControle(controle) {
        switch (controle) {
            case calculadora_1.Controle.DESATIVAÇÃO:
                this.realizaCalculo();
                break;
            case calculadora_1.Controle.ATIVAÇÃO_LIMPEZA_ERRO:
                this.realizaCalculo();
                break;
            case calculadora_1.Controle.MEMÓRIA_LEITURA_LIMPEZA:
                this.lerMemoria();
                break;
            case calculadora_1.Controle.MEMÓRIA_SOMA:
                this.adicionaMemoria();
                break;
            case calculadora_1.Controle.MEMÓRIA_SUBTRAÇÃO:
                this.limpaMemoria();
                break;
            case calculadora_1.Controle.SEPARADOR_DECIMAL:
                this.adicionaDecimal();
                break;
            case calculadora_1.Controle.IGUAL:
                this.realizaCalculo();
                break;
        }
    }
    realizaCalculo() {
        if (this.op != calculadora_1.Operação.RAIZ_QUADRADA) {
            this.pDigito = String(this.converte(`${this.pDigito}${this.opToString(this.op || calculadora_1.Operação.SOMA)}${this.digitoDois}`));
        }
        else if (this.op == calculadora_1.Operação.RAIZ_QUADRADA) {
            this.pDigito = String(this.converte(`(${this.pDigito}${this.opToString(this.op || calculadora_1.Operação.RAIZ_QUADRADA)}`));
        }
        else {
            this.pDigito = String(this.converte(`(${this.pDigito}${this.opToString(this.op || calculadora_1.Operação.MULTIPLICAÇÃO)}${this.digitoDois}) / 100`));
        }
        console.log(this.pDigito);
        this.digitoDois = "";
    }
    ehUnario(operação) {
        return operação === calculadora_1.Operação.RAIZ_QUADRADA || operação === calculadora_1.Operação.PERCENTUAL;
    }
    adicionaDecimal() {
        if (this.pDigito != "") {
            this.pDigito += ".";
        }
        else {
            this.digitoDois += ".";
        }
    }
    limpaMemoria() {
        this.mDigito = "";
    }
    adicionaMemoria() {
        this.mDigito = this.pDigito;
    }
    lerMemoria() {
        this.pDigito = this.mDigito;
    }
    reinicie() {
        this.tela ? this.tela.limpe() : null;
        this.tela ? this.tela.mostre(calculadora_1.Digito.ZERO) : null;
    }
    definaTela(tela) {
        this.tela = tela;
    }
    obtenhaTela() {
        return this.tela;
    }
}
exports.default = CpuB4;
