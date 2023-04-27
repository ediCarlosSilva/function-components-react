import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function FormularioCadastro() {
    
    const [nome, setNome] = useState('');

    return (
        <form onSubmit={(evento) => {
                evento.preventDefault();
                console.log(nome)
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

            <TextField id="sobrenome" fullWidth label="Sobrenome" variant='outlined' margin="normal" />

            <TextField id="CPF" fullWidth label="CPF" variant='outlined' margin="normal" />

            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes" defaultChecked />}
            />

            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades" defaultChecked />}
            />

            <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
        </form>
    )
}