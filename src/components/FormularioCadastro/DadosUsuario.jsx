import React from "react";
import {TextField, Button} from '@mui/material';

export default function DadosUsuario({aoEnviar}) {
    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            aoEnviar();
        }}>
            <TextField 
                id="email" 
                label="email" 
                type="email" 
                variant='outlined' 
                margin="normal" 
                required
                fullWidth 
            />
            <TextField id="senha" label="senha" type="password" variant='outlined' margin="normal" fullWidth required />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    )
}