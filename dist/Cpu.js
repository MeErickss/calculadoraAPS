"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controle;
(function (Controle) {
    Controle[Controle["DESATIVACAO"] = 0] = "DESATIVACAO";
    Controle[Controle["ATIVACAO_LIMPEZA_ERROR"] = 1] = "ATIVACAO_LIMPEZA_ERROR";
    Controle[Controle["LIGA_LIMPA_ERRO"] = 2] = "LIGA_LIMPA_ERRO";
    Controle[Controle["MEMORI_LEITURA_LIMPEZA"] = 3] = "MEMORI_LEITURA_LIMPEZA";
    Controle[Controle["MEMORIA_SOMA"] = 4] = "MEMORIA_SOMA";
    Controle[Controle["MEMORIA_SUBTRACAO"] = 5] = "MEMORIA_SUBTRACAO";
    Controle[Controle["SEPARADOR_DECIMAL"] = 6] = "SEPARADOR_DECIMAL";
})(Controle || (Controle = {}));
var Digito;
(function (Digito) {
    Digito[Digito["ZERO"] = 0] = "ZERO";
    Digito[Digito["UM"] = 1] = "UM";
    Digito[Digito["DOIS"] = 2] = "DOIS";
    Digito[Digito["TRES"] = 3] = "TRES";
    Digito[Digito["QUATRO"] = 4] = "QUATRO";
    Digito[Digito["CINCO"] = 5] = "CINCO";
    Digito[Digito["SEIS"] = 6] = "SEIS";
    Digito[Digito["SETE"] = 7] = "SETE";
    Digito[Digito["OITO"] = 8] = "OITO";
    Digito[Digito["NOVE"] = 9] = "NOVE";
})(Digito || (Digito = {}));
var Operacao;
(function (Operacao) {
    Operacao[Operacao["SOMA"] = 0] = "SOMA";
    Operacao[Operacao["SUBTRACAO"] = 1] = "SUBTRACAO";
    Operacao[Operacao["MULTIPLICACAO"] = 2] = "MULTIPLICACAO";
    Operacao[Operacao["DIVISAO"] = 3] = "DIVISAO";
    Operacao[Operacao["RAIZ"] = 4] = "RAIZ";
})(Operacao || (Operacao = {}));
class Cpu {
    ligar() { }
    receberDigito(numero) { }
    receberOperação(operação) { }
    receberControle(controle) { }
    calculaResultado() { }
}
exports.default = Cpu;
