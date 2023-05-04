import React, { useEffect, useState } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';
import {Typography, Stepper, Step, StepLabel} from '@mui/material';

export default function FormularioCadastro({ aoEnviar, validarCPF }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if(etapaAtual === formulario.length - 1) {
            aoEnviar(dadosColetados)
        }
    });

    const formulario = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado pelo cadastro</Typography>
    ];

    function coletarDados(dados) {
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo() {
        setEtapaAtual(etapaAtual + 1);
    }

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
            {
                formulario[etapaAtual]
            }

        </>
    )
}

//
//
// 