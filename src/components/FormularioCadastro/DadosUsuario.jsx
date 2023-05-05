import React, {  useState, useContext } from "react";
import {TextField, Button} from '@mui/material';
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

export default function DadosUsuario({aoEnviar}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [erros, setErros] = useState({senha: {valido: true, texto: ""}});

    const validacoes = useContext(ValidacoesCadastro);

    function validarCampo(evento) {
        const {name, value} = evento.target;
        const novoEstado = {...erros}
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado)
    }

    function possoEnviar () {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false;
            }
        }
        return true;
    }

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