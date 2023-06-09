import React, { useState, useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

export default function FormularioCadastro({ aoEnviar }) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampo, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if (possoEnviar()) {
                aoEnviar({ nome, sobrenome, cpf, promocoes, novidades })
            }
        }}>

            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                onBlur={validarCampo}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id="nome"
                name="nome"
                fullWidth
                label="nome"
                variant='outlined'
                margin="normal"
            />

            <TextField
                value={sobrenome}
                onChange={event => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                fullWidth
                label="Sobrenome"
                variant='outlined'
                margin="normal"
            />

            <TextField
                value={cpf}
                onChange={event => {
                    setCpf(event.target.value);
                }}
                onBlur={validarCampo}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                name="cpf"
                fullWidth
                label="CPF"
                variant='outlined'
                margin="normal"
            />

            <FormControlLabel
                label="Promoções"
                control={<Switch
                    checked={promocoes}
                    onChange={event => {
                        setPromocoes(event.target.checked);
                    }}
                    name="promocoes"
                    color="primary" />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch
                    onChange={event => {
                        setNovidades(event.target.checked)
                    }}
                    name="novidades" checked={novidades} color="primary" />}
            />

            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}