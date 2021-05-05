import React, { FC } from 'react';
import { Box, Container } from '@material-ui/core';
import { Layout, PollForm } from '../../components';
import { useStyles } from './styles';

const NewPoll: FC = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.root}>
        <Container maxWidth="md">
          <PollForm />
        </Container>
      </Box>
    </Layout>
  );
};

export default NewPoll;
