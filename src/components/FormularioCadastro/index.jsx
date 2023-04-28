import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function FormularioCadastro() {
    
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');

    return (
        <form onSubmit={(evento) => {
                evento.preventDefault();
                console.log(nome, sobrenome, cpf);
                }}>

            <TextField
                value={nome}
                onChange={event => {
                    let tempNome = event.target.value;
                    
                    if(tempNome.length >= 3) {
                        tempNome = tempNome.substr(0, 3);
                    }

                    setNome(tempNome);
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
                id="CPF" 
                fullWidth 
                label="CPF" 
                variant='outlined' 
                margin="normal" 
            />

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