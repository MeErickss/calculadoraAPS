import Digito from "./CpuGrupo22"


export interface Tela {
    mostrarDigito(digito: Digito): void
    limpa():void
}

export default class Display implements Tela{
    mostrarDigito(digito: Digito): void {
        console.log(digito)
    }

    limpa(): void {
        console.clear()
    }
}

class MinhaDisplay extends Display {
    showAlpha(value: string): void{
        console.log("[a]"+value)
    }

    override showNumber(value: number): void{
        console.log("[n]"+value)
    }
}

const d = new Display()
d.showNumber(123.45)

var d1 = new MinhaDisplay()
d1.showNumber(123.45)

var d2: Display = new MinhaDisplay()
d2 = d1
d1 = d2 as MinhaDisplay