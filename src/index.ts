import CpuB4 from "./cpuGrupoB4";
import { Digito, Operação, Controle } from "./calculadora"
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

    // sobrescreve Display.showNumber()
    override showNumber(value: number): void {
        console.log("[n]" + value)
    }
}

// const d = new Display();
// d.showNumber(123.45);

// var d1 = new MinhaDisplay();
// d1.showNumber(123.45);

// var d2: Display = new MinhaDisplay() // criando objeto tipo Display
// d2 = d1
// d1 = d2 as MinhaDisplay; //conversao de tipo com Type Casting

const tela = new TelaB4()
const cpu = new CpuB4(tela)

cpu.recebaDigito(Digito.TRÊS)
cpu.recebaOperacao(Operação.MULTIPLICAÇÃO)
cpu.recebaDigito(Digito.DOIS)
cpu.recebaControle(Controle.IGUAL)

cpu.recebaDigito(Digito.UM)
cpu.recebaDigito(Digito.SEIS)
cpu.recebaOperacao(Operação.RAIZ_QUADRADA)