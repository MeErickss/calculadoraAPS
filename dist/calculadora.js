"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controle = exports.Operação = exports.Digito = void 0;
var Digito;
(function (Digito) {
    Digito[Digito["ZERO"] = 0] = "ZERO";
    Digito[Digito["UM"] = 1] = "UM";
    Digito[Digito["DOIS"] = 2] = "DOIS";
    Digito[Digito["TR\u00CAS"] = 3] = "TR\u00CAS";
    Digito[Digito["QUATRO"] = 4] = "QUATRO";
    Digito[Digito["CINCO"] = 5] = "CINCO";
    Digito[Digito["SEIS"] = 6] = "SEIS";
    Digito[Digito["SETE"] = 7] = "SETE";
    Digito[Digito["OITO"] = 8] = "OITO";
    Digito[Digito["NOVE"] = 9] = "NOVE";
})(Digito || (exports.Digito = Digito = {}));
var Operação;
(function (Operação) {
    Operação[Operação["SOMA"] = 0] = "SOMA";
    Operação[Operação["SUBTRA\u00C7\u00C3O"] = 1] = "SUBTRA\u00C7\u00C3O";
    Operação[Operação["MULTIPLICA\u00C7\u00C3O"] = 2] = "MULTIPLICA\u00C7\u00C3O";
    Operação[Operação["DIVIS\u00C3O"] = 3] = "DIVIS\u00C3O";
    Operação[Operação["RAIZ_QUADRADA"] = 4] = "RAIZ_QUADRADA";
    Operação[Operação["PERCENTUAL"] = 5] = "PERCENTUAL";
})(Operação || (exports.Operação = Operação = {}));
var Controle;
(function (Controle) {
    Controle[Controle["DESATIVA\u00C7\u00C3O"] = 0] = "DESATIVA\u00C7\u00C3O";
    Controle[Controle["ATIVA\u00C7\u00C3O_LIMPEZA_ERRO"] = 1] = "ATIVA\u00C7\u00C3O_LIMPEZA_ERRO";
    Controle[Controle["MEM\u00D3RIA_LEITURA_LIMPEZA"] = 2] = "MEM\u00D3RIA_LEITURA_LIMPEZA";
    Controle[Controle["MEM\u00D3RIA_SOMA"] = 3] = "MEM\u00D3RIA_SOMA";
    Controle[Controle["MEM\u00D3RIA_SUBTRA\u00C7\u00C3O"] = 4] = "MEM\u00D3RIA_SUBTRA\u00C7\u00C3O";
    Controle[Controle["SEPARADOR_DECIMAL"] = 5] = "SEPARADOR_DECIMAL";
    Controle[Controle["IGUAL"] = 6] = "IGUAL";
})(Controle || (exports.Controle = Controle = {}));
