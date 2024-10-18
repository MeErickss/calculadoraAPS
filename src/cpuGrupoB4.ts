import { Controle, Cpu, Digito, Operação, Tela, Sinal } from "./calculadora"


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

    converte = (expressao: string): number => {
        const func = new Function('return ' + expressao);
        return func();
    };

    mDigito = ""
    pDigito = ""
    sDigito = ""
    op: Operação|undefined = undefined
    controleDecimal: boolean = false

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
        if (this.ehUnario(this.op) == false){
            if((this.pDigito != "" && this.sDigito != "")){
                this.realizaCalculo()
            }
        } else if(this.pDigito != ""){
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
            case Controle.IGUAL:this.realizaCalculo();break;
        }
    }
    realizaCalculo(){
        if (this.ehUnario(this.op) == false) {
            this.pDigito = String(this.converte(`${this.pDigito}${this.opToString(this.op||Operação.SOMA)}${this.sDigito}`));
        } else if(this.op == Operação.RAIZ_QUADRADA){
            this.pDigito = String(this.converte(`(${this.pDigito}${this.opToString(this.op||Operação.RAIZ_QUADRADA)}`));
        } else{
            this.pDigito = String(this.converte(`(${this.pDigito}${this.opToString(this.op||Operação.MULTIPLICAÇÃO)}${this.sDigito}) / 100`));
        }
        console.log(`${this.pDigito} ${this.op} ${this.sDigito}`)
        this.sDigito = ""
        this.op = undefined
        
    } 

    private ehUnario(operação: Operação | undefined){
        return operação == Operação.RAIZ_QUADRADA||operação == Operação.PERCENTUAL
    }
    adicionaDecimal(){
        if(this.pDigito != "" && !(this.pDigito.includes(".") && this.op == undefined && this.sDigito == "")){this.pDigito += "."} else if(!(this.sDigito.includes("."))){this.sDigito += "."}
    }
    limpaMemoria(){
        this.mDigito = ""
    }
    adicionaMemoria(){
        this.mDigito = this.pDigito
    }
    lerMemoria(){
        this.pDigito = this.mDigito
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
