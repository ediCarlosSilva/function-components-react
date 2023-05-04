import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'

export default function DadosEntrega({aoEnviar}) {

    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");


    return (
        <form onSubmit={evento => {
            evento.preventDefault();
            aoEnviar({cep, endereco, numero, estado, cidade})
        }}>
            <TextField
                value={cep}
                onChange={evento => setCep(evento.target.value)}
                id="cep"
                label="cep"
                type="number"
                variant='outlined'
                margin="normal"

            />
            <TextField
                value={endereco}
                onChange={evento => setEndereco(evento.target.value)}
                id="endereco"
                label="Endereco"
                type="text"
                variant='outlined'
                margin="normal"
                fullWidth
            />
            <TextField
                value={numero}
                onChange={evento => setNumero(evento.target.value)}
                id="numero"
                label="Numero"
                type="number"
                variant='outlined'
                margin="normal"

            />
            <TextField
                value={estado}
                onChange={evento => setEstado(evento.target.value)}
                id="estado"
                label="Estado"
                type="text"
                variant='outlined'
                margin="normal"

            />
            <TextField
                value={cidade}
                onChange={evento => setCidade(evento.target.value)}
                id="cidade"
                label="Cidade"
                type="text"
                variant='outlined'
                margin="normal"

            />
            <Button type="submit" variant="contained" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}