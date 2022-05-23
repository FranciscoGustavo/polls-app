import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { BoxRoot } from './styles';

const Congratulations: FC = () => {
  return (
    <BoxRoot>
      <Box>
        <Typography variant="h2">¡Felicidades!</Typography>
      </Box>
      <Box>
        <Typography variant="h4">Has terminado la encuesta</Typography>
      </Box>
      <Box>
        <Button component={Link} to="/" variant="contained" color="secondary">
          Salir
        </Button>
      </Box>
    </BoxRoot>
  );
};

export default Congratulations;
