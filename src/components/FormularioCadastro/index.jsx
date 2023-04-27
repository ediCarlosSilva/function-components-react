import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" fullWidth label="nome" variant='outlined' margin="normal" />

            <TextField id="sobrenome" fullWidth label="Sobrenome" variant='outlined' margin="normal"/>

            <TextField id="CPF" fullWidth label="CPF" variant='outlined' margin="normal" />

            <label htmlFor="">Promoções</label>
            <input type="checkbox" />

            <label htmlFor="">Novidades</label>
            <input type="checkbox" />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}