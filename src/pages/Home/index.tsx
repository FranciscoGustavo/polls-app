import React, { FC } from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import { usePolls } from '../../hooks';
import { Layout, PollCard } from '../../components';
import { useStyles } from './styles';

const Home: FC = () => {
  const classes = useStyles();
  const polls = usePolls();
  return (
    <Layout>
      <Box className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            {polls.map(({ uid, title, isAnswered }) => (
              <Grid key={uid} item xs={12}>
                <PollCard
                  uid={uid as string}
                  title={title}
                  isAnswered={isAnswered}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
