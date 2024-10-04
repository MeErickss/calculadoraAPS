import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora"


export default class CpuB4 implements Cpu {

    tela: Tela | undefined;
    dict = {
        "IGUAL":this.realizaCalculo(),
        "DESATIVAÇÃO": ,
        "ATIVAÇÃO_LIMPEZA_ERRO":,
        "MEMÓRIA_LEITURA_LIMPEZA":this.lerMemoria(),
        "MEMÓRIA_SOMA":this.adicionaMemoria(),
        "MEMÓRIA_SUBTRAÇÃO":this.limpaMemoria(),
        "SEPARADOR_DECIMAL":this.adicionaDecimal()
    }
    memoria = []
    pDigito = ""
    sDigito = ""
    op = ""
    resultado = ""

    constructor(tela: Tela) {
        this.definaTela(tela);
      }
        
    recebaDigito(digito: Digito): void {
        if (this.sDigito == "" && this.op == ""){
            this.pDigito += digito
        } else {
            this.sDigito += digito
        }
        throw new Error("Method not implemented.");
    }
    recebaOperacao(operação: Operação): void {
        if(this.pDigito != "" && this.sDigito != ""){
            return this.realizaCalculo()
        } else if(this.pDigito != "" && this.sDigito == ""){
            let op = operação
        }
        throw new Error("Method not implemented.");
    }
    recebaControle(controle: Controle): void {
        return dict[controle]
        throw new Error("Method not implemented.");
    }
    realizaCalculo(){
        let resultado = eval(this.pDigito) + eval(this.op) + eval(this.sDigito)
        return resultado     
    } 
    adicionaDecimal(){
        if(this.pDigito != ""){this.pDigito += "."} else {this.sDigito += "."}
    }
    limpaMemoria(){
        let memoria = ""
    }
    adicionaMemoria(){
        let memoria = this.resultado
    }
    lerMemoria(){
        let restultado = this.memoria
    }

    reinicie(): void {
        this.tela ? this.tela.limpe() : null;
        this.tela ? this.tela.mostre(Digito.ZERO) : null;
    }
    definaTela(tela: Tela | undefined): void {
        this.tela = tela;
    }
    obtenhaTela(): Tela {
        return this.tela;
    }
}
