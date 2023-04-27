import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@mui/material';

export default function FormularioCadastro() {
    return (
        <form>
            <TextField id="nome" fullWidth label="nome" variant='outlined' margin="normal" />

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