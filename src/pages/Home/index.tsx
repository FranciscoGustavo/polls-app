import React, { FC } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { PollCard } from '../../components';

const Home: FC = () => {
  return (
    <Box>
      <Container>
        <Typography variant="h1">Entrevistas</Typography>
        <Grid container spacing={2}>
          {new Array(5).fill('').map(() => (
            <Grid item xs={12}>
              <PollCard />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
