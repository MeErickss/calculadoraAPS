import CpuB4 from "./cpuGrupoB4";
import { Digito, Operação, Controle, Sinal } from "./calculadora"
import { TestadorTela, TestadorCpu } from "./calculadoraTestes"
import  TelaB4  from "./telaGrupoB4"

export interface IDisplay {
    showNumber(value: number) : void;
    clear(): void;
}

export default class Display implements IDisplay{
    showNumber(value: number): void{
        console.log(value);
    }

    clear(): void {
        
    }
}

class MinhaDisplay extends Display{
    showAlpha(value: string): void {
        console.log("[a]" + value)
    }

    override showNumber(value: number): void {
        console.log("[n]" + value)
    }
}

const tela = new TelaB4()
const cpu = new CpuB4(tela)
const testeTela = new TestadorTela(tela)
const testeCpu = new TestadorCpu(cpu)

//cpu.recebaDigito(Digito.)
//cpu.recebaControle(Controle.)
//cpu.recebaOperacao(Operação.)

//cpu.recebaDigito(Digito.UM)
//cpu.recebaOperacao(Operação.SOMA)
//cpu.recebaDigito(Digito.UM)
//cpu.recebaControle(Controle.IGUAL)
//
//cpu.recebaDigito(Digito.UM)
//cpu.recebaOperacao(Operação.SUBTRAÇÃO)
//cpu.recebaDigito(Digito.DOIS)
//cpu.recebaControle(Controle.IGUAL)
//
//cpu.recebaDigito(Digito.SETE)
//cpu.recebaOperacao(Operação.MULTIPLICAÇÃO)
//cpu.recebaDigito(Digito.SETE)
//cpu.recebaControle(Controle.IGUAL)
//
//cpu.recebaDigito(Digito.NOVE)
//cpu.recebaOperacao(Operação.DIVISÃO)
//cpu.recebaDigito(Digito.NOVE)
//cpu.recebaControle(Controle.IGUAL)
//
//cpu.recebaDigito(Digito.DOIS)
//cpu.recebaDigito(Digito.CINCO)
//cpu.recebaDigito(Digito.SEIS)
//cpu.recebaOperacao(Operação.RAIZ_QUADRADA)
//cpu.recebaControle(Controle.IGUAL)
//
//cpu.recebaDigito(Digito.UM)
//cpu.recebaDigito(Digito.ZERO)
//cpu.recebaDigito(Digito.ZERO)
//cpu.recebaOperacao(Operação.SOMA)
//cpu.recebaDigito(Digito.DOIS)
//cpu.recebaDigito(Digito.DOIS)
//cpu.recebaOperacao(Operação.PERCENTUAL)
//cpu.recebaControle(Controle.IGUAL)
//
//cpu.recebaDigito(Digito.UM)
//cpu.recebaDigito(Digito.DOIS)
//cpu.recebaDigito(Digito.TRÊS)
//cpu.recebaControle(Controle.MEMÓRIA_SOMA)
//cpu.recebaOperacao(Operação.SOMA)
//cpu.recebaDigito(Digito.UM)
//cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
//cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
//cpu.recebaControle(Controle.IGUAL)


//testeTela.testeTodosNúmeros()
//testeTela.testeTodosSímbolo()
//testeCpu.teste123Soma456()
//testeCpu.teste12Divisão10()
//testeCpu.teste12Soma34Soma56()

//cpu.recebaDigito(Digito.UM)
//cpu.recebaDigito(Digito.DOIS)
//cpu.recebaOperacao(Operação.SOMA)
//cpu.recebaDigito(Digito.TRÊS)
//cpu.recebaDigito(Digito.QUATRO)
//cpu.recebaOperacao(Operação.SOMA)
//cpu.recebaDigito(Digito.CINCO)
//cpu.recebaDigito(Digito.SEIS)
//cpu.recebaControle(Controle.IGUAL)