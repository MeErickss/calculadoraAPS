"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpuGrupoB4_1 = __importDefault(require("./cpuGrupoB4"));
const calculadora_1 = require("./calculadora");
const telaGrupoB4_1 = __importDefault(require("./telaGrupoB4"));
class Display {
    showNumber(value) {
        console.log(value);
    }
    clear() {
    }
}
exports.default = Display;
class MinhaDisplay extends Display {
    showAlpha(value) {
        console.log("[a]" + value);
    }
    // sobrescreve Display.showNumber()
    showNumber(value) {
        console.log("[n]" + value);
    }
}
// const d = new Display();
// d.showNumber(123.45);
// var d1 = new MinhaDisplay();
// d1.showNumber(123.45);
// var d2: Display = new MinhaDisplay() // criando objeto tipo Display
// d2 = d1
// d1 = d2 as MinhaDisplay; //conversao de tipo com Type Casting
const tela = new telaGrupoB4_1.default();
const cpu = new cpuGrupoB4_1.default(tela);
cpu.recebaDigito(calculadora_1.Digito.DOIS);
cpu.recebaOperacao(calculadora_1.Operação.MULTIPLICAÇÃO);
cpu.recebaDigito(calculadora_1.Digito.UM);
cpu.recebaControle(calculadora_1.Controle.IGUAL);
cpu.recebaDigito(calculadora_1.Digito.QUATRO);
cpu.recebaOperacao(calculadora_1.Operação.RAIZ_QUADRADA);
