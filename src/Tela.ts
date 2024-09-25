import Digito, Operacao, Controle from "./Cpu"

export default class Display {
    mostra(digito:Digito){
        console.log(digito)
    }

    clear(){
        console.clear()
    }
}