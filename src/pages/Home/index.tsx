import React, { FC } from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { Layout, PollCard } from '../../components';
import { useStyles } from './styles';

const Home: FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            {new Array(5).fill('').map(() => (
              <Grid item xs={12}>
                <PollCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
