import React from "react";
import {TextField, Button} from '@mui/material';

export default function DadosUsuario() {
    return (
        <form>
            <TextField id="email" label="email" type="email" variant='outlined' margin="normal" fullWidth />
            <TextField id="senha" label="senha" type="password" variant='outlined' margin="normal" fullWidth />
            <Button type="submit" variant="contained">Cadastrar</Button>
        </form>
    )
}