enum Controle {
    DESATIVACAO,
    ATIVACAO_LIMPEZA_ERROR,
    LIGA_LIMPA_ERRO,
    MEMORI_LEITURA_LIMPEZA,
    MEMORIA_SOMA,
    MEMORIA_SUBTRACAO,
    SEPARADOR_DECIMAL
}

enum Digito {
    ZERO,
    UM,
    DOIS,
    TRES,
    QUATRO,
    CINCO,
    SEIS,
    SETE,
    OITO,
    NOVE
}

enum Operacao {
    SOMA,
    SUBTRACAO,
    MULTIPLICACAO,
    DIVISAO,
    RAIZ
}

export default class Cpu {
    ligar(){}

    receberDigito(numero:Digito){}

    receberOperação(operação:Operacao){}

    receberControle(controle:Controle){}

    calculaResultado(){}

}