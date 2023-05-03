import React from 'react';
import {TextField, Button} from '@mui/material'

export default function DadosEntrega() {
    return (
        <form>
            <TextField
                id="cep"
                label="cep"
                type="number"
                variant='outlined'
                margin="normal"
                
            />
            <TextField
                id="endereco"
                label="Endereco"
                type="text"
                variant='outlined'
                margin="normal"
                fullWidth
            />
            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant='outlined'
                margin="normal"
                
            />
            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant='outlined'
                margin="normal"
                
            />
            <TextField
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