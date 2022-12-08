import { FC } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

export const Confirmation: FC<{
    onDelete: () => void;
    onClose: () => void;
}> = ({ onDelete, onClose }) => {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign="center">
                        Eliminar encuesta
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body2" textAlign="center">
                        Estas Seguro?
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth onClick={onDelete}>
                        Eliminar
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        variant="contained"
                        color="secondary"
                        fullWidth
                        onClick={onClose}
                    >
                        Cancelar
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};
