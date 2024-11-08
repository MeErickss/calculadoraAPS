import CpuB4 from "./cpuGrupoB4";
import { Digito, Operação, Controle, Sinal } from "./calculadora"
import  TelaB4  from "./telaGrupoB4a"

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

//cpu.recebaDigito(Digito.)
//cpu.recebaControle(Controle.)
//cpu.recebaOperacao(Operação.)



cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.ZERO)
cpu.recebaDigito(Digito.ZERO)
cpu.recebaOperacao(Operação.SOMA)
cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.ZERO)
cpu.recebaOperacao(Operação.PERCENTUAL)
cpu.recebaControle(Controle.IGUAL)


cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.DOIS)
cpu.recebaDigito(Digito.TRÊS)
cpu.recebaControle(Controle.MEMÓRIA_SOMA)
cpu.recebaOperacao(Operação.SOMA)
cpu.recebaDigito(Digito.UM)
cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
cpu.recebaControle(Controle.IGUAL)


cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.DOIS)
cpu.recebaDigito(Digito.TRÊS)
cpu.recebaControle(Controle.MEMÓRIA_SOMA)
cpu.recebaOperacao(Operação.SOMA)
cpu.recebaDigito(Digito.UM)
cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
cpu.recebaDigito(Digito.UM)
cpu.recebaControle(Controle.IGUAL)


cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.DOIS)
cpu.recebaDigito(Digito.TRÊS)
cpu.recebaControle(Controle.MEMÓRIA_SOMA)
cpu.recebaOperacao(Operação.SOMA)
cpu.recebaDigito(Digito.UM)
cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
cpu.recebaControle(Controle.MEMÓRIA_LEITURA_LIMPEZA)
cpu.recebaControle(Controle.IGUAL)


cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.DOIS)
cpu.recebaDigito(Digito.TRÊS)
cpu.recebaOperacao(Operação.SOMA)
cpu.recebaDigito(Digito.UM)
cpu.recebaControle(Controle.IGUAL)