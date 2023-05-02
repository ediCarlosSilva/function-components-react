import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function DadosPessoais({aoEnviar, validarCPF}) {
    
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf: {valido: true, texto: ""}});

    return (
        <form onSubmit={(evento) => {
                evento.preventDefault();
                aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
                }}>

            <TextField
                value={nome}
                onChange={event => {
                    setNome(event.target.value);
                }}
                
                id="nome"
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
                onBlur={evento => {
                    setErros({cpf: validarCPF(cpf)})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF" 
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

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}