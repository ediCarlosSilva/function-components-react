import React, {  useState } from "react";
import {TextField, Button} from '@mui/material';

export default function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
  

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            aoEnviar({email, senha});
        }}>
            <TextField 
                value={email}
                onChange={evento => setEmail(evento.target.value)}
                id="email" 
                label="email" 
                type="email" 
                variant='outlined' 
                margin="normal" 
                required
                fullWidth 
            />
            <TextField 
                value={senha}
                onChange={evento => setSenha(evento.target.value)}
                id="senha" 
                label="senha" 
                type="password" 
                variant='outlined' 
                margin="normal" 
                fullWidth 
                required 
            />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    )
}