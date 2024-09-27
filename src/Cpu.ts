enum Controle { DESATIVACAO, ATIVACAO_LIMPEZA_ERROR, MEMORIA_LEITURA_LIMPEZA, MEMORIA_SOMA, MEMORIA_SUBTRACAO, SEPARADOR_DECIMAL }

enum Digito { ZERO, UM, DOIS, TRES, QUATRO, CINCO, SEIS, SETE, OITO, NOVE }

enum Operacao { SOMA, SUBTRACAO, MULTIPLICACAO, DIVISAO, RAIZ_QUADRADA, PERCENTUAL }

export default class Cpu {
    recebaDigito(digito: Digito){}
    recebaOperacao(operacao: Operacao){}
    recebaControle(controle: Controle){}
}