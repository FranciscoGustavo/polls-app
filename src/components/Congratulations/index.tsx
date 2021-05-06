import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@material-ui/core';
import { useStyles } from './styles';

const Congratulations: FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
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
    </Box>
  );
};

export default Congratulations;
