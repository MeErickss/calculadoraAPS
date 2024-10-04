import { Controle, Cpu, Digito, Operação, Tela } from "./calculadora"


export default class CpuB4 implements Cpu {

    tela: Tela | undefined;
    dict = {
        "IGUAL":this.realizaCalculo(),
        "DESATIVAÇÃO":this.realizaCalculo() ,
        "ATIVAÇÃO_LIMPEZA_ERRO":this.realizaCalculo(),
        "MEMÓRIA_LEITURA_LIMPEZA":this.lerMemoria(),
        "MEMÓRIA_SOMA":this.adicionaMemoria(),
        "MEMÓRIA_SUBTRAÇÃO":this.limpaMemoria(),
        "SEPARADOR_DECIMAL":this.adicionaDecimal()
    }
    private opToString(operação:Operação):string{
        switch (operação) {
            case Operação.SOMA: return "+"
            case Operação.SUBTRAÇÃO: return "-"
            case Operação.DIVISÃO: return "/"
            case Operação.PERCENTUAL: return "%"
            case Operação.MULTIPLICAÇÃO: return "*"
            case Operação.RAIZ_QUADRADA: return "**"
        }
    }
    memoria = []
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
        if(this.pDigito != "" && this.sDigito != ""){
            this.realizaCalculo()
        }
        this.op = operação
    }
    recebaControle(controle: Controle): void {
        switch (controle) {
            case Controle.DESATIVAÇÃO:this.realizaCalculo();break;
            case Controle.ATIVAÇÃO_LIMPEZA_ERRO:this.realizaCalculo();break;
            case Controle.MEMÓRIA_LEITURA_LIMPEZA:this.lerMemoria();break;
            case Controle.MEMÓRIA_SOMA:this.adicionaMemoria();break;
            case Controle.MEMÓRIA_SUBTRAÇÃO:this.limpaMemoria();break;
            case Controle.SEPARADOR_DECIMAL:this.adicionaDecimal();break;
            
        }
        throw new Error("Method not implemented.");
    }
    realizaCalculo(){
        let resultado = eval(this.pDigito) + eval(this.opToString(this.op?this.op:Operação.SOMA)) + eval(this.sDigito)
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
    obtenhaTela(): Tela| undefined {
        return this.tela;
    }
}
