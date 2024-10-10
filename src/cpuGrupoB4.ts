import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora"


export default class CpuB4 implements Cpu {

    tela: Tela | undefined;
    opToString(operação:Operação):string{
        switch (operação) {
            case Operação.SOMA: return "+"
            case Operação.SUBTRAÇÃO: return "-"
            case Operação.DIVISÃO: return "/"
            case Operação.PERCENTUAL: return "*"
            case Operação.MULTIPLICAÇÃO: return "*"
            case Operação.RAIZ_QUADRADA: return "**0.5"
        }
    }
    mDigito = ""
    pDigito = ""
    sDigito = ""
    op: Operação|undefined = undefined
    resultado = ""

    constructor(tela: Tela) {
        this.definaTela(tela);
      }
        
    recebaDigito(digito: Digito): void {
        if (this.sDigito == "" && this.op == undefined){
            this.pDigito += digito
        } else {
            this.sDigito += digito
        }
    }
    recebaOperacao(operação: Operação): void {
        if (this.op != Operação.RAIZ_QUADRADA){
            if(this.pDigito != "" && this.sDigito != ""){
                this.realizaCalculo()
            }
            this.op = operação
        }
    }
    recebaControle(controle: Controle): void {
        switch (controle) {
            case Controle.DESATIVAÇÃO:this.realizaCalculo();break;
            case Controle.ATIVAÇÃO_LIMPEZA_ERRO:this.realizaCalculo();break;
            case Controle.MEMÓRIA_LEITURA_LIMPEZA:this.lerMemoria();break;
            case Controle.MEMÓRIA_SOMA:this.adicionaMemoria();break;
            case Controle.MEMÓRIA_SUBTRAÇÃO:this.limpaMemoria();break;
            case Controle.SEPARADOR_DECIMAL:this.adicionaDecimal();break;
            case Controle.IGUAL:this.realizaCalculo();break;
        }
    }
    realizaCalculo(){
        console.log(this.op)
        console.log(Operação.MULTIPLICAÇÃO)
        if (this.op && this.op !== Operação.RAIZ_QUADRADA) {
            this.resultado = eval(`${this.pDigito}${this.opToString(this.op)}${this.sDigito}`);
        } else if (this.op === Operação.PERCENTUAL){
            this.resultado = eval(`(${this.pDigito}${this.opToString(this.op)}${this.sDigito}) / 100`);
        } else if (this.op === Operação.RAIZ_QUADRADA) {
            this.resultado = eval(`${this.pDigito}${this.opToString(this.op)}`);
        }
        console.log(this.resultado)
    } 
    adicionaDecimal(){
        if(this.pDigito != ""){this.pDigito += "."} else {this.sDigito += "."}
    }
    limpaMemoria(){
        this.mDigito = ""
    }
    adicionaMemoria(){
        this.mDigito = this.resultado
    }
    lerMemoria(){
        this.resultado = this.mDigito
    }

    reinicie(): void {
        this.tela ? this.tela.limpe() : null;
        this.tela ? this.tela.mostre(Digito.ZERO) : null;
    }
    definaTela(tela: Tela | undefined): void {
        this.tela = tela;
    }
    obtenhaTela(): Tela| undefined {
        return this.tela;
    }
}
