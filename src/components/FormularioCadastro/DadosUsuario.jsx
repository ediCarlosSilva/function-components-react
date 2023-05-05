import React, {  useState, useContext } from "react";
import {TextField, Button} from '@mui/material';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

export default function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);

    const [erros, validarCampo, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit={(evento) => {
            evento.preventDefault();
            if(possoEnviar()) {
                aoEnviar({email, senha});
            }
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
                onBlur={validarCampo}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name="senha"
                label="senha" 
                type="password" 
                variant='outlined' 
                margin="normal" 
                fullWidth 
                required 
            />
            <Button type="submit" variant="contained">Próximo</Button>
        </form>
    )
}