import React, {useState} from 'react';

function useErros(validacoes) {

    const estadoInicial = criarEstadoInicial(validacoes);

    const [erros, setErros] = useState(estadoInicial);

    function validarCampo(evento) {
        const {name, value} = evento.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function possoEnviar () {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampo, possoEnviar]
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {};
    for (let campo in validacoes) {
        estadoInicial[campo] = {valido: true, texto: ""};   
    }

    return estadoInicial;
}

export default useErros;